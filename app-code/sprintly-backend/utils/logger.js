const chalk = require('chalk');

const logger = {
  info: (msg) => console.log(chalk.blue('[INFO]'), msg),
  success: (msg) => console.log(chalk.green('[SUCCESS]'), msg),
  warning: (msg) => console.warn(chalk.yellow('[WARN]'), msg),
  error: (msg) => console.error(chalk.red('[ERROR]'), msg)
};

module.exports = logger;

//const logger = require('./utils/logger');
//logger.success('Backend started successfully');