const http = require('http');

const { books, authors } = require('./dictionary');

const HOST = 'localhost';
const PORT = 3000;

// 

const requestHandler = (request, response) => {
    console.log(request.url);
    switch (request.url) {
        case '/books':
            response.end(JSON.stringify(books));
            break;
        case '/authors':
            response.end(JSON.stringify(authors));
            break;
        default:
            response.write('Hello Node.js Server!');
    }
}

const server = http.createServer(requestHandler)
server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
    }
);