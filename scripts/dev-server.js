const spawn = require('child_process').spawn;
let nodemon = process.platform === 'win32'
  ? 'node_modules\\.bin\\nodemon.cmd' 
  : 'nodemon' ;
let wds = process.platform === 'win32'
  ? 'node_modules\\.bin\\webpack-dev-server.cmd' 
  : './node_modules/webpack-dev-server/bin/webpack-dev-server.js' ;

[
  [nodemon, ['--ignore', 'client/', 'server.js', '--port', '3001']],
  [wds, ["--config", "../config/webpack.config.js", "--mode", "development"]],
  ['node', ['build', '-w']],
].forEach((args) => {
  const child = spawn.apply(spawn, args).on('error', err => { throw err; });
  child.stdout.on('data', data => process.stdout.write(data+''));
  child.stderr.on('data', data => process.stdout.write(data+''));
});
