const logger = require('winston');

logger.default.transports.console.colorize = true;

const myCustomLevels = {
    levels: {
        client: 0,
        server: 1,
        info: 2,
        important: 3
    },
    colors: {
        client: 'green',
        server: 'blue',
        info: 'black',
        important: 'red'
    }
};

logger.setLevels(myCustomLevels.levels);
logger.addColors(myCustomLevels.colors);

module.exports = logger;
