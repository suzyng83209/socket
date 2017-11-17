const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

io.on('connection', socket => {
    console.log('connected');
    socket.on('message-send', msg => {
        console.log('message: ', msg);
        io.emit('message-send', msg);
    });
    socket.on('disconnect', () => console.log('disconnected'));
});

http.listen(1337, () => console.log('listnening!'));
