'use strict';
const fs = require('fs');

const isMinGW = () => {
  if (process.platform !== 'win32') {
    return false;
  }

  try {
    return fs.readFileSync('/proc/version', 'utf8').toLowerCase.includes('mingw');
  } catch (err) {
    return false;
  }
};

module.exports = isMinGW();
