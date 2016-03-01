"use strict";

const assert = require("power-assert");
const ls = require("../ls");

describe("ls tests", () => {
  it("should be return file list", () => {
    const files = ls();
    assert(files.length === 6);
    assert(files.indexOf("README.md") > -1);
    assert(files.indexOf("index.js") > -1);
    assert(files.indexOf("ls.js") > -1);
    assert(files.indexOf("node_modules") > -1);
    assert(files.indexOf("package.json") > -1);
    assert(files.indexOf("test") > -1);
  });

  it("should be return test/ file list", () => {
    const files = ls("test/");
    assert(files.length === 2);
    assert(files.indexOf("index.js") > -1);
    assert(files.indexOf("ls.js") > -1);
  });
});
