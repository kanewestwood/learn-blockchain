import Block from "./block";

const block = new Block({
  timestamp: "01/01/01",
  data: "foo-data",
  hash: "foo hash",
  lastHash: "foo-lastHash",
});

console.log("block", block);
