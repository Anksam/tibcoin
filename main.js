const SHA256 = require('crypto-js/sha256');

class Block {
  // constructor will receive properties of this block
  constructor(index, timestamp, data, previousHash = ' ') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }
  // function to calculate hashfunction of this block
  calculateHash(){
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}

class Blockchian {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock(){
    return new Block(0, "09/06/2020", "Genesis Block", "0");
  }

  getLatestBlock(){
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock){
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
}
