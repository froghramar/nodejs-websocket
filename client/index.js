const ws = new BrowserWebSocket('ws://localhost:3030');

ws.on('open', function() {
    sendMessage({
        text: "Hello Server"
    });
});

ws.on('message', function(e) {
    const message = JSON.parse(e.data);
    console.log(message);
});

function sendMessage(message) {
    console.log("Client:");
    console.log(message);
    ws.emit(JSON.stringify(message));
}
