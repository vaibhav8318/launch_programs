const Production = require('./production');
const Development = require('./development');

const config = {
  production: Production,
  development: Development,
};
// get app environment
const env = process.env.BUILD_ENV || 'development';
const configFile = config[env] || config.development;

// export config file
module.exports = configFile;
