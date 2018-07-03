// const WebSocket = require('ws');
// const server = new WebSocket.Server({port:3000});
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const logger = require('util.log');

// Подключаем модуль и ставим на прослушивание 8080-порта - 80й обычно занят под http-сервер
const io = require('socket.io').listen(3000);
// Отключаем вывод полного лога - пригодится в production'е
io.set('log level', 1);
// Навешиваем обработчик на подключение нового клиента
io.sockets.on('connection', function (socket) {
    // Т.к. чат простой - в качестве ников пока используем первые 5 символов от ID сокета
    let ID = (socket.id).toString().substr(0, 5);
    let time = (new Date).toLocaleTimeString();
    // Посылаем клиенту сообщение о том, что он успешно подключился и его имя
    socket.json.send({'event': 'connected', 'name': ID, 'time': time});
    // Посылаем всем остальным пользователям, что подключился новый клиент и его имя
    socket.broadcast.json.send({'event': 'userJoined', 'name': ID, 'time': time});
    // Навешиваем обработчик на входящее сообщение
    socket.on('message', function (msg) {
        let time = (new Date).toLocaleTimeString();
        // Уведомляем клиента, что его сообщение успешно дошло до сервера
        socket.json.send({'event': 'messageSent', 'name': ID, 'text': msg, 'time': time});
        // Отсылаем сообщение остальным участникам чата
        socket.broadcast.json.send({'event': 'messageReceived', 'name': ID, 'text': msg, 'time': time})
    });
    // При отключении клиента - уведомляем остальных
    socket.on('disconnect', function() {
        let time = (new Date).toLocaleTimeString();
        io.sockets.json.send({'event': 'userSplit', 'name': ID, 'time': time});
    });
});


const log = logger.Logger.instance({
    toConsole: true
});
// server.on('connection',ws=>{
//     ws.on('message',message=>{
//         console.log(players);
//         server.clients.forEach(client =>{
//             let data = JSON.parse(message);
//         });
//     });
// });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(3001, function () {
    log.info('Example app listening on port 3001!');
});
let arr;
app.get('/info', function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    data = {"ms": arr};
    log.info('get info');

    res.send(JSON.stringify(data));
});
app.post('/info', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    arr = req.body.id;
    data = {"ms": "ok"};
    log.info('post info'+req.body.id);

    res.send(JSON.stringify(data));
});