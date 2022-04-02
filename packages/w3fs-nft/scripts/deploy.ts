import { ethers } from "hardhat";
import { config } from "dotenv";

config();

async function main() {
  const W3FS = await ethers.getContractFactory("W3FS");
  const w3fs = await W3FS.deploy("http://localhost:3000/api/id/");

  await w3fs.deployed();

  console.log("Greeter deployed to:", w3fs.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
