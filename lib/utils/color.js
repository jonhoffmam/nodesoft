var color = {
  red: '\x1B[31m',
  green: '\x1B[32m',
  yellow: '\x1B[33m',
  black: '\x1B[39m',
};

const setColor = (code, message) => (color[code] || color.black) + message + color.black;

module.exports = setColor;
