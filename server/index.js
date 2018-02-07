require('dotenv').config();
const WebSocket = require('ws');
const logger = require('./logger');

const wss = new WebSocket.Server({
    port: process.env.SERVER_PORT
});

wss.on('connection', function connection(ws) {
    ws.on('end', () => console.log('ended'));
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
            client.send(JSON.stringify(message), function (err) {
                client.terminate();
            });
        }
    });
}
