const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3030 });

wss.on('connection', function connection(ws) {
    ws.on('message', function (message) {
        receiveMessage(message);
        broadcast("kjnuhj");
    });
});

function receiveMessage(message) {
    console.log("Client:");
    console.log(JSON.parse(message));
}

function broadcast(data) {
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    });
}
