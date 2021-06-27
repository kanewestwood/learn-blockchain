import Block from "./block";
import { GENESIS_BLOCK } from "./config";
import { cryptoHash } from "./crypto-hash";

describe("Block", () => {
  const timestamp = new Date();
  const data = "data";
  const hash = "hash";
  const lastHash = "lastHash";
  const block = new Block({ timestamp, data, hash, lastHash });

  it("has timestamp, data , hash & lastHash properties", () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.data).toEqual(data);
    expect(block.hash).toEqual(hash);
    expect(block.lastHash).toEqual(lastHash);
  });

  describe("genesis()", () => {
    const genesisBlock = Block.genesis();

    it("returns genesis data", () => {
      expect(genesisBlock).toEqual(GENESIS_BLOCK);
    });
  });

  describe("mineBlock()", () => {
    const lastBlock = Block.genesis();
    const data = "mined data";
    const minedBlock = Block.mineBlock({ lastBlock, data });

    it("should set the last hash to be the hash of the last block", () => {
      expect(minedBlock.lastHash).toEqual(lastBlock.hash);
    });

    it("should set block with the data", () => {
      expect(minedBlock.data).toEqual(data);
    });

    it("should set timestamp", () => {
      expect(minedBlock.timestamp).not.toEqual(undefined);
    });

    it("should hash data with proper inputs", () => {
      expect(minedBlock.hash).toEqual(
        cryptoHash(minedBlock.timestamp, lastBlock.hash, data)
      );
    });
  });
});
