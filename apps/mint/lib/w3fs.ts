import { ethers } from "ethers";
import { W3FS__factory } from "./w3fs/factories/W3FS__factory";

export const w3fsProvider = () => {
  if (typeof window === "undefined" || !window.ethereum) {
    throw new Error("w3fsProvider() must be called client-side");
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const w3fsContract = new W3FS__factory(signer);
  console.log(process.env.CONTRACT_ADDRESS);

  return w3fsContract.attach(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!);
};
