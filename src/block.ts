/**
 * Block class
 */
import {GENESIS_BLOCK} from "./config";

class Block {
  timestamp: string;
  data: string;
  hash: string;
  lastHash: string;

  /**
   * Block Constructor
   *
   * @param {Object} root0 Block object
   * @param {string} root0.timestamp timestamp of block
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
    timestamp: string;
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
}

export default Block;
