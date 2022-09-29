import { createLogger, format, transports } from "winston";
const { combine, timestamp, label, printf, colorize } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});
const timeFormat = `YYYY-MM-DD HH:mm:ss`;

export const logger = createLogger({
    format: combine(
        label({ label: 'LOG' }),
        timestamp({
            format: timeFormat
        }),
        myFormat,
        colorize({
            all: true
        }),
    ),
    transports: [
        new transports.Console({
            level: `debug`,
            eol: '\r\n',
        }),
        new transports.File({
            dirname: './axios-winston/logs',
            filename: `api-tests.log`,
            level: 'debug',
            options: { flags: 'w' }
        }),
    ]
});
