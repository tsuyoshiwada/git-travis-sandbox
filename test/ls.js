"use strict";

const assert = require("power-assert");
const ls = require("../ls");

describe("ls tests", () => {
  it("should be return file list", () => {
    const files = ls();
    const expected = [
      "README.md",
      "index.js",
      "ls.js",
      "node_modules",
      "package.json",
      "test"
    ];
    assert.deepStrictEqual(files, expected);
  });

  it("should be return test/ file list", () => {
    const files = ls("test/");
    const expected = [
      "index.js",
      "ls.js"
    ];
    assert.deepStrictEqual(files, expected);
  });
});
