import { cryptoHash } from "./crypto-hash";

describe("cryptoHash()", () => {
  it("should generate a SHA-256 hash", () => {
    expect(cryptoHash("kane")).toEqual(
      "f57dbb83bc838bda3c0cf7d6091e9a3c16f824cef7ebef8faad554bf5ebc7ad4"
    );
  });

  it("should generate same hash with the same input in any order", () => {
    expect(cryptoHash("one", "two", "three")).toEqual(
      cryptoHash("three", "two", "one")
    );
  });
});
