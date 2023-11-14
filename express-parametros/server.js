const express = require('express');	
const app = express();

app.use(express.urlencoded({ extended: true }));

//http://facebook.com/profiles/12345?campaign=googleads&name_campaign=wharever

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="post">
            client name: <input type="text" name="name">
            <button>Enviar</button>     
        </form>
    `);
});

app.get('/tests/:idUsuarios?/:parameter?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofile);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.name}`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});