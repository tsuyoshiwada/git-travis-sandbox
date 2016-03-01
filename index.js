"use strict";

const which = require("which");

module.exports = function(cmd) {
  try {
    which.sync(cmd);
    return true;
  } catch (e) {
    return false;
  }
};
