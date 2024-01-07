# Token Bridging
ERC20 Goerli to Mumbai Bridge Using fxPortal


## Description
This project demonstrates how to use the fxPortal contracts to transfer ERC20 tokens from Goerli to Mumbai.

## Getting Started
Put your private key in the .env.examples file and rename to .env when finished

### Installing
Run npm i to install dependencies

### Executing program

1. Run npx hardhat run scripts/deploy.js --network goerli to deploy ERC20 contract
2. Paste the newly deployed contract address in the tokenAddress variable for the other scripts
3. Make sure to fill in your public key
4. Run npx hardhat run scripts/mint.js --network goerli to mint tokens to your wallet
5. Run npx hardhat run scripts/approveDeposit.js --network goerli to approve and deposit your tokens to polygon
6. Wait 20-30ish minutes for tokens to show on polygon account
7. Use polyscan.com to check your account for the tokens. Once they arrive, you can click on the transaction to get the contract address for polygon.
8. Use this polygon contract address for your getBalance script's tokenAddress
9. Run npx hardhat run scripts/getBalance.js --network mumbai to see the new polygon balance
```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import the ERC721 contract from OpenZeppelin
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract SimpleNFT is ERC721URIStorage {
    address public owner;
    mapping(uint256=>string) prompt;

    constructor() ERC721("SimpleNFT", "SNFT") {
        owner=msg.sender;
    }

    modifier onlyOwner(){
        require(msg.sender==owner,"you are not allowed to do this");
        _;
    }

    function mint(uint256 tokenId, string memory tokenURIs,address to,string memory prompts) public onlyOwner { 
        require(!_exists(tokenId), "Token already exists");
        prompt[tokenId]=prompts;
        _mint(to, tokenId);
        _setTokenURI(tokenId, tokenURIs);
        
    }
    function showprompt(uint256 tokenId) public view returns (string memory){
        return prompt[tokenId];
    }
}
```

## Authors
Prakash
@Hackprakas

