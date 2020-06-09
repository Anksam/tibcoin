class Block {
  // constructor will receive properties of this block
  constructor(index, timestamp, data, previousHash = ' ') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = '';
  }
}
