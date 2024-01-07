
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/SimpleNFT.sol/SimpleNFT.json");
require('dotenv').config()

const tokenAddress = "0xCAB37359Fc51E84cfbC71cF4ad17646B75D315E2"; 
const tokenABI = tokenContractJSON.abi;


async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  
   const owners=await token.owner();
   console.log(owners);

   const tokenURIs = [
    "ipfs://QmREYtBCzUEYaSDz82rsUYpu5ZiQNNfeRssYLAk33RrAZF/nft1.json",
    "ipfs://QmREYtBCzUEYaSDz82rsUYpu5ZiQNNfeRssYLAk33RrAZF/nft2.json",
    "ipfs://QmREYtBCzUEYaSDz82rsUYpu5ZiQNNfeRssYLAk33RrAZF/nft3.json",
    "ipfs://QmREYtBCzUEYaSDz82rsUYpu5ZiQNNfeRssYLAk33RrAZF/nft4.json",
    "ipfs://QmREYtBCzUEYaSDz82rsUYpu5ZiQNNfeRssYLAk33RrAZF/nft5.json"
  ];

  const prompts = [
    "generate an natural image1",
    "generate an natural image2",
    "generate an natural image3",
    "generate an natural image4",
    "generate an natural image5"
  ];

  // Batch minting 5 NFTs
  for (let i = 0; i < 5; i++) {
    const tokenId = i + 1; // Assuming you want to start from tokenId 1
    const to = owners; // Mint to the owner for simplicity, update as needed

    await token.mint(tokenId, tokenURIs[i], to, prompts[i]);
    console.log(`NFT with ID ${tokenId} minted.`);
  }
}

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });