import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import { HardhatUserConfig } from "hardhat/types";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [{ version: "0.8.11", settings: {} }],
  },
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/",
      accounts: [process.env.RINKEBY_PRIVATE_KEY!],
    },
  },
};

export default config;
