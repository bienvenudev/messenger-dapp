require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("dotenv").config();

const { PRIVATE_KEY, INFURA_ALFAJORES_URL } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    alfajores: {
      chainId: 11142220,
      url: INFURA_ALFAJORES_URL, 
      accounts: [PRIVATE_KEY],
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};
