require('dotenv').config();
const WebSocket = require('ws');
const logger = require('winston');

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

const wss = new WebSocket.Server({
    port: process.env.SERVER_PORT
});

wss.on('connection', function connection(ws) {
    ws.on('message', function (message) {
        receiveMessage(message);
        broadcast({
            text: "Hello Client"
        });
    });
});

function receiveMessage(message) {
    logger.client(JSON.parse(message));
}

function broadcast(message) {
    logger.server(message);
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(message));
        }
    });
}
