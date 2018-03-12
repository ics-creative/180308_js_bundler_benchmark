const {FuseBox} = require('fuse-box');

process.env.NODE_ENV = 'production';

const fuse = FuseBox.init({
  homeDir: '../src/',
  output: '../dist/fusebox/$name.js',
  sourceMaps: false,
  cache: false,
  tsConfig : "./tsconfig.json"
});

fuse.bundle('index')
  .instructions(`> index.js`);

fuse.run();
