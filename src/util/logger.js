const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(({ timestamp, level, message, ...args }) => {
        args = JSON.stringify(args)
        return `[${timestamp}] ${level}: ${message} ${args !== '{}' ? args : ''}`;
      })
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/app.log' }),
    ],
  });

module.exports = logger;
