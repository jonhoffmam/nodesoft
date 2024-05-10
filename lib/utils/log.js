const color = require('./color');

var code = {
  log: 'black',
  status: 'green',
  info: 'yellow',
  detail: 'yellow',
  fail: 'red',
  error: 'red',
};

function log(type, out) {
  console.log(color(code[type], `[node-soft] ${out}`));
}

module.exports = log;
