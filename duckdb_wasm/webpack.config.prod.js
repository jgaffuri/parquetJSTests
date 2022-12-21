const path = require('path');

module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    filename: 'test.min.js',
    publicPath: "build/",
    library: "test",
    libraryTarget: "umd",
    path: path.resolve(__dirname, 'build'),
  },
  devtool: false,
  watch: false,
  optimization: {
    usedExports: true,
    minimize: true,
  },

  experiments: {
    asyncWebAssembly: true,
    syncWebAssembly: true
  },

  module: {
    rules: [
      //{ test: /\.html$/, use: 'html-loader' },
      //{ test: /\.wasm$/, use: 'wasm-loader' },
    ],
  },

  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "stream": require.resolve("stream-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "assert": require.resolve("assert"),
      "process": require.resolve("process/browser"),
      "os": require.resolve("os-browserify/browser"),
      "buffer": require.resolve("buffer/"),
      "zlib": require.resolve("zlib-browserify"),
      "url": require.resolve("url/"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "constants": require.resolve("constants-browserify"),
      "fs": false,
      "net": false,
      "tls": false,
      "dns": false,
      "mock-aws-s3": false,
      "child_process": false,
      "aws-sdk": false,
      "nock": false,
      "bluebird": false,
    }
  },

};
