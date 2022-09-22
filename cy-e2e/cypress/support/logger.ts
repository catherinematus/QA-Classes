import log4js from 'log4js';
import { assetsFolder } from './constants/constants';
const dateFormat = '%d{[dd/MM/yyyy] [hh:mm:ss]} [%p] - %m';

log4js.configure({
    appenders: {
        fullLog: {
            type: 'file',
            filename: "cypress/assets/logs/fullLog.log",
            layout: {
                type: 'pattern',
                pattern: dateFormat,
            },
        },
        console: {
            type: 'console',
            layout: { type: 'basic' },
        },
    },
    categories: { default: { appenders: ['fullLog', 'console'], level: 'debug' } },
});

export const logger = log4js.getLogger();