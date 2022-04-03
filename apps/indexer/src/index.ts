import app from "./app";
import http from "http";
import type { HttpError } from "http-errors";
import { Contract } from "ethers";
import { config as dotnevConfig } from "dotenv";
import fetch from "isomorphic-unfetch";
import { supabase } from "./lib/supabase";
import { ethersProvider } from "./lib/ethers";

dotnevConfig();

const listeners = {};

const port = normalizePort(process.env.PORT || "4000");
app.set("port", port);

const server = http.createServer(app);

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

function normalizePort(val: string) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onError(error: HttpError) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

async function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr!.port;

  const { data } = await supabase.from("contracts").select("*");

  data?.forEach(async (contract: any) => {
    const contractApi = new Contract(
      contract.address,
      contract.abi.abi,
      ethersProvider
    );

    contractApi.on("Transfer", async (from, to, tokenId) => {
      console.log(
        `Contract: ${contract.id} Transfer: id: ${tokenId} from: ${from} to ${to} `
      );

      await supabase.from("members").upsert({
        id: to,
        address: to,
      });

      await supabase.from("member_communities").upsert({
        token_id: tokenId,
        member_id: to,
        community_id: contract.community_id,
      });
    });
  });

  console.log("Server listening on " + bind + " 🚀");
}
