import { GENESIS_BLOCK } from "./config";

/**
 * Block class
 */
class Block {
  timestamp: Date;
  data: string;
  hash: string;
  lastHash: string;

  /**
   * Block Constructor
   *
   * @param {Object} root0 Block object
   * @param {Date} root0.timestamp timestamp of block
   * @param {string} root0.data data for block
   * @param {string} root0.hash hash for block
   * @param {string} root0.lastHash hash from last block
   */
  constructor({
    timestamp,
    data,
    hash,
    lastHash,
  }: {
    timestamp: Date;
    data: string;
    hash: string;
    lastHash: string;
  }) {
    this.timestamp = timestamp;
    this.data = data;
    this.hash = hash;
    this.lastHash = lastHash;
  }

  /**
   * Method that creates initial block
   *
   * @returns {Block} initial block
   */
  static genesis(): Block {
    return new this(GENESIS_BLOCK);
  }

  /**
   * Method that mines Block
   *
   * @param {Object} root Object of last block and new data
   * @param {Block} root.lastBlock last block in sequence
   * @param {string} root.data data to store
   * @returns {Block} mined block
   */
  static mineBlock({
    lastBlock,
    data,
  }: {
    lastBlock: Block;
    data: string;
  }): Block {
    return new this({
      timestamp: new Date(),
      lastHash: lastBlock.hash,
      data,
      hash: "Todo", // TODO: set up hash
    });
  }
}

export default Block;
