const spawn = require('threads').spawn;

const thread = spawn(function (input, done) {
    done();
});

function broadcast(clients, data) {
    thread
        .send(clients)
        .on('error', function (error) {
            console.error(error);
        })
        .on('exit', function () {
            console.log('Successfully Broadcast');
        });
}

module.exports = {
    broadcast: broadcast
};
