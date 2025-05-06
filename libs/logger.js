import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import winston from 'winston';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.File({ filename: join(process.cwd(), 'error.log'), level: 'error' }),
    new winston.transports.File({ filename: join(process.cwd(), 'info.log') }),
  ],
});

export default logger;
