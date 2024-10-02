const http = require('http');
const server = http.createServer((req, res) =>{
    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname;
    if (path.startsWith('/saudacao/')) {
        const nome = path.replace('/saudacao/','');
        res.end(`Olá, ${nome}!`);
    } else {
        res.end('Página não encontrada');
    }
});

server.listen(3000, () => {
    console.log('Servidor rodando no localhost: 3000')
});