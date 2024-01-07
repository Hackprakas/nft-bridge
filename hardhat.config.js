require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [process.env.PRIVATE_KEY],
    },
    sepolia: {
      url: 'https://sepolia.infura.io/v3/4552a99968694b2198a84c3594a6e830',
      accounts: [process.env.PRIVATE_KEY],
    },
  }
};
