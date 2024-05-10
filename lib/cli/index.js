const nodesoft = require('../');

function cli(argv) {
  const args = {
    script: argv[2],
  };

  nodesoft(args);
}

module.exports = cli;
