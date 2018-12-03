var path = require('path');
var defaultConfig = require('@ionic/app-scripts/config/webpack.config.js');
var env = process.env.IONIC_ENV ? process.env.IONIC_ENV : 'dev';

module.exports = function () {
  Object.keys(defaultConfig).forEach(function (key) {
    var pathToEnvConfigFile = path.resolve('./src/environments/environment.' + env + '.ts');

    if (env === 'dev') {
      pathToEnvConfigFile = path.resolve('./src/environments/environment.ts');
    }

    defaultConfig[key].resolve.alias = {
      "@environment": pathToEnvConfigFile
    };
  });

  return defaultConfig;
};
