module.exports = {
  entry: {
	  app: "./src/boot",
	  
	  vendors: [
            //__dirname + "/node_modules/zone.js/lib/zone.js",
            //__dirname + "/node_modules/reflect-metadata",
            //__dirname + "/node_modules/angular2/bundles/angular2-polyfills.js"
        ]
  },
  output: {
    path: __dirname,
	filename: "./bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [{
      test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/
    }]
  }
};