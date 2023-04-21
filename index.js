const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  transports: [
    new winston.transports.File({ filename: 'error.log' })
  ]
});

function throwError() {
  throw new Error('Este es un mensaje de error personalizado');
}

try {
  throwError();
} catch (error) {
  logger.error(error.message);
}
