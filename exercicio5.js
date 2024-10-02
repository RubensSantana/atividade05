const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Bem vindo!</h1>');
});
app.get('/api/data', (req, res) => {
    res.json({
        Nome: 'João',
        Idade: 27,
        Cidade: 'Guarapuava'
    });
});

app.listen(3000, () => {
    console.log('Servidor rodado no localhost: 3000');
});