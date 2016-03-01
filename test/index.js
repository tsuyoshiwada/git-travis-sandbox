"use strict";

const assert = require("power-assert");
const which = require("../");

describe("which tests", () => {
  it("should be return true", () => {
    assert(true === which("git"));
    assert(true === which("pwd"));
    assert(true === which("ls"));
  });

  it("should be return false", () => {
    assert(false === which("hoge"));
    assert(false === which("fuga"));
    assert(false === which("12345"));
  });
});
