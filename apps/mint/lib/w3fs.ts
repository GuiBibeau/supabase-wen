//@ts-nocheck

import { W3FS__factory } from "@wen/mint-nft";
import { ethers } from "ethers";

export const w3fsProvider = () => {
  if (typeof window === "undefined") {
    return;
  }
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const w3fsContract = new W3FS__factory(signer);

  return w3fsContract.attach("0xADD9DC59bCe9160d1CE9Be61d1a64d8DE368527B");
};
