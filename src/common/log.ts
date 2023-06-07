import pino from 'pino';
import logger from 'morgan';
import {config} from "../config/config";

class Logger {
    log = pino()

    info(msg: string): void {
        this.log.info(msg)
    }

    warn(msg: string): void {
        this.log.warn(msg)
    }

    error(msg: string): void {
        this.log.error(msg)
    }

    middleware() {
        return logger(config.LOG_LEVEL);
    }
}

export const log = new Logger();
