import Block from "./Block";

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
});
