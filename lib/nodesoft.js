const { spawn } = require('child_process');
const { watch } = require('fs');
const { extname, basename } = require('path');
const log = require('./utils/log');
const debounce = require('./utils/debounce');

let serverProcess;

function nodesoft(args) {
  const { script } = args;

  if (!script) {
    log('fail', 'usage: [ node-soft or nodesoft ] [ script.js ]');

    process.exit(1);
  }

  serverProcess = spawn('node', [script]);

  log('status', `starting 'node ${basename(script)}'`);

  serverProcess.stdout.on('data', (data) => {
    console.log(String(data).replace(/\n/, ''));
  });

  serverProcess.stderr.on('data', (data) => {
    log('error', `server error: ${data}`);
    serverProcess.kill();
  });

  serverProcess.stderr.on('error', (data) => {
    log('error', data);
    serverProcess.kill();
  });
}

function restart() {
  log('status', 'changes detected, restarting...');
  if (serverProcess) {
    serverProcess.kill();
  }
  nodesoft({ script: process.argv[2] });
}

const callbackWatch = debounce((_, filename) => {
  if (['.js', '.html', '.css'].includes(extname(filename))) {
    restart();
  }
}, 100);

watch('.', { recursive: true }).on('change', callbackWatch);

module.exports = nodesoft;
