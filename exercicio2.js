const http = require('http')

const rotas = function(req, res){
    if (req.url === "/"){
        res.writeHead(200);
        res.end("Bem-vindo!");
    } else if (req.url === "/sobre"){
        res.writeHead(200);
        res.end("Informações sobre você");
    } else if (req.url === "/contato"){
        res.writeHead(200);
        res.end("Responder com suas informações de contato");
    } else {
        res.writeHead(404);
        res.end("Página não encontrada")
    }
};

const server = http.createServer(rotas);

server.listen(3000, 'localhost', () => {
    console.log("Servidor está rodando em http://localhost:3000");
})
