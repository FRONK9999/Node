exports.paginaInicial = (req, res) => {
        res.send(`
            <form action="/" method="post">
                client name: <input type="text" name="name">
                <button>Enviar</button>     
            </form>
        `);
    };

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST.')
};