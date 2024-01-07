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