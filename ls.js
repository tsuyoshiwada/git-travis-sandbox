"use strict";

const path = require("path");
const fs = require("fs");
const execSync = require("child_process").execSync;

function dirname(dir) {
  try {
    const stat = fs.statSync(dir);
    return stat.isDirectory() ? dir : "";
  } catch (e) {
    return "";
  }
}

module.exports = function(dir) {
  return execSync(`ls ${dirname(dir)}`, {encoding: "utf8"})
    .trim()
    .replace(/\r\n?/g, "\n")
    .split("\n");
};
