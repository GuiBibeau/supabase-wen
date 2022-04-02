import { W3FS__factory } from "../typechain";
import { ethers, utils, BigNumber } from "ethers";
import { config } from "dotenv";
import http from "http";

config();

const buyNft = async () => {};

const { RINKEBY_PRIVATE_KEY, ALCHEMY_RINKEBY_URL } = process.env;

const provider = new ethers.providers.JsonRpcProvider(ALCHEMY_RINKEBY_URL);
const signer = new ethers.Wallet(RINKEBY_PRIVATE_KEY!, provider);
const w3fs = new W3FS__factory(signer);
const contract = w3fs.attach("0xADD9DC59bCe9160d1CE9Be61d1a64d8DE368527B");

const tokenPrice = utils.parseEther("0.02");
const gasPrice = utils.parseUnits("10", "gwei");

const server = http.createServer(function () {});

server.listen(4000);
server.on("listening", () => {
  contract.mint(BigNumber.from(1), {
    value: tokenPrice,
    gasPrice,
    gasLimit: 1000000,
  });

  contract.on("Transfer", async (to, from, tokenId) => {
    console.log("to: ", to);
    console.log("from: ", from);
    console.log("token: ", tokenId);
  });
});
