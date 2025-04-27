import { configure } from 'log4js';

configure({
    appenders: {
        console: {
            type: 'console',
            layout: {
                type: 'pattern',
                pattern: '%[%d{yyyy-MM-dd hh:mm:ss} %p %c - %m%]',
            },
        },
        file: {
            type: 'file',
            filename: 'logs/app.log',
            layout: {
                type: 'pattern',
                pattern: '%[%d{yyyy-MM-dd hh:mm:ss} %p %c - %m%]',
            },
            maxLogSize: 10485760, // 10MB
            backups: 3,
            compress: true, // compress the backups
        },
    },
    categories: {
        default: {
            appenders: ['console'],
            level: 'debug',
        },
    },
});
