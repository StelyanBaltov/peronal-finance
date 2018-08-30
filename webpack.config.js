const NODE_ENV = process.env.NODE_ENV || 'development';
const buildConfig = env => require('./webpack/webpack.' + env + '.config.js');

module.exports = buildConfig(NODE_ENV);