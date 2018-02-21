'use strict';
const { execSync } = require('child_process');

const isMinGW = () => {
  if (process.platform !== 'win32') {
    return false;
  }

  try {
    return execSync('uname -a', {encoding: 'utf-8'}).toLowerCase().includes('mingw');
  } catch (err) {
    return false;
  }
};

module.exports = isMinGW();
