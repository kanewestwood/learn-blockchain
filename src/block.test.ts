import Block from "./block";
import { GENESIS_BLOCK } from "./config";

describe("Block", () => {
  const timestamp = "01/01/01";
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
});
