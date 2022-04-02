import { W3FS__factory } from "@wen/mint-nft";
import { ethers, utils } from "ethers";
import { config } from "dotenv";

config();

const { PRIVATE_KEY } = process.env;

const signer = new ethers.Wallet(PRIVATE_KEY);

const w3fs = new W3FS__factory(signer);

const contract = w3fs.attach("0x6A4D2e3873728FeDeF4AD12EC2D759F21B09f82a");

contract.mint();
