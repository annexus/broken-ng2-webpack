module.exports = {
	
/**
 * This doesn't seem to work
  entry: {
	  app: "./src/boot",
	  
	  vendors: [
            //__dirname + "/node_modules/zone.js/lib/zone.js",
            //__dirname + "/node_modules/reflect-metadata",
            //__dirname + "/node_modules/angular2/bundles/angular2-polyfills.js"
        ]
  },
 */
 
 // Defining entry as a string seems to work. To Angular 2 component will be loaded, but webpack spits out a ton of errors.
  entry: "./src/boot",
  
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
