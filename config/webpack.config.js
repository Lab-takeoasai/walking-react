module.exports = {
  entry: "./app/index.tsx",
  output: {
    filename: "./www/bundle.js"
  },
  devtool: "inline-source-map",
  watch: true,
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
};
