import { ethers, utils, BigNumber } from "ethers";

const { ALCHEMY_RINKEBY_URL } = process.env;

export const ethersProvider = new ethers.providers.JsonRpcProvider(
  ALCHEMY_RINKEBY_URL
);
