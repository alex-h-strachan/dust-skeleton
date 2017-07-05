/* eslint-disable no-console */
const { spawn } = require('child_process');

function registerListeners(processEmitter) {
  processEmitter.stdout.on('data', (data) => {
    console.log(`stdout: ${data.toString()}`);
  });

  processEmitter.stderr.on('data', (data) => {
    console.log(`stderr: ${data.toString()}`);
  });

  processEmitter.on('exit', (code) => {
    console.log(`child process exited with code ${code.toString()}`);
  });
}

registerListeners(spawn('nodemon', ['server.js']));
registerListeners(spawn('webpack', ['--config', './webpack/dev.js']));
