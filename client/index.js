var ws = new BrowserWebSocket('ws://localhost:3030');

ws.on('open', function() {
    sendMessage({
        text: "Hello World"
    });
});

ws.on('message', function(e) {
    var message = e.data;
    console.log(message);
});

function sendMessage(message) {
    console.log("Client:");
    console.log(message);
    ws.emit(JSON.stringify(message));
}
