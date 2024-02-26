const path = require('path');

// creating proxy for backend
// building directory changed to server/public 
module.exports = {

  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000'
      }
    }
  }
};
