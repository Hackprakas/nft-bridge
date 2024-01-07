
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/SimpleNFT.sol/SimpleNFT.json");

const tokenAddress = "0xCAB37359Fc51E84cfbC71cF4ad17646B75D315E2"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const fxERC20RootAddress = "0x3658ccFDE5e9629b0805EB06AaCFc42416850961";
const walletAddress = "0xB30585f4c2b942c28CBDF42e387Ba6Cb9a6da446"; // place your public address for your wallet here

async function main() {

    const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC20RootAddress);

    const approveTx = await tokenContract.approve(fxERC20RootAddress, 5);
    await approveTx.wait();

    console.log('Approval confirmed');


    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, 5, "0x6556");
    await depositTx.wait();

    console.log("Tokens deposited");
  
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });