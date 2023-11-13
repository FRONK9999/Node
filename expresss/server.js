const express = require('express');	
const app = express();


//CRUD -> CREATE, READ, UPDATE, DELETE
//        POST    GET   PUT     DELETE
// http://meusite.com/ <- get -> deliver the page
// http://meusite.com/sobre <- get -> deliver the page /about
// http://meusite.com/contato <- get -> deliver the page /contact

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="post">
            Name: <input type="text" name="name">
            <button>Enviar</button>     
        </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
});

app.get('/contact', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});