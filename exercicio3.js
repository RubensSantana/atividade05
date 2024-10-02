const http = require("http");
const { randomNumber } = require('./util.js');

const server = http.createServer((req, res) => {
    if(req.url === '/numero'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end (randomNumber().toString());
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Página não encontrada')
    }
});

server.listen(3000, () => {
    console.log('Servidor rodando no localhost: 3000');
});