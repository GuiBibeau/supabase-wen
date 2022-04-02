import { W3FS__factory } from "../typechain";
import { ethers, utils, BigNumber } from "ethers";
import { config } from "dotenv";

config();

const unpause = async () => {
  const { RINKEBY_PRIVATE_KEY, ALCHEMY_RINKEBY_URL } = process.env;

  const provider = new ethers.providers.JsonRpcProvider(ALCHEMY_RINKEBY_URL);
  const signer = new ethers.Wallet(RINKEBY_PRIVATE_KEY!, provider);
  const w3fs = new W3FS__factory(signer);
  const contract = w3fs.attach("0xADD9DC59bCe9160d1CE9Be61d1a64d8DE368527B");

  const tx = await contract.functions.unpause({
    gasPrice: utils.parseUnits("10", "gwei"),
    gasLimit: 1000000,
  });

  await tx.wait(5);

  console.log("unpaused successfully");
};

unpause();
