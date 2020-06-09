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
    require SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}
