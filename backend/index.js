#!/usr/bin/node

const http = require('http');

const HOST = 'localhost';
const PORT = 3000;

const requestHandler = (request, response) => {
    console.log(request);
    response.write('Hey there from Node.js Server!');
    response.end('Hello Node.js Server!');
}

const server = http.createServer(requestHandler)

server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
    }
);

