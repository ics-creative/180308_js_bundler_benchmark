import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default {
  input: 'src/index.js',
  sourcemap: false,
  output: [
    {
      format: 'iife',
      file: 'dist/main.rollup.js'
    },
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    resolve(),
    commonjs()
  ]
};
