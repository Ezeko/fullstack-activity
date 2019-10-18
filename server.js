const http = require('http');

const server = http.createServer(
    console.log({
        message: 'connected to server'
    })
);

server.listen(process.env.PORT || 3000);
