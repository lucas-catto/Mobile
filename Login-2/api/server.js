const express    = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
const cors       = require('cors');

const app   = express();
const porta = 3000;

app.use(bodyParser.json());
app.use(cors());

const conexaoBD = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login_db'
});

conexaoBD.connect((erro) => {
    if (erro) throw erro;
    console.log('Conectado ao banco de dados.');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const consulta = 'SELECT * FROM usuarios WHERE username = ? AND password = ?';
    conexaoBD.query(consulta, [username, password], (erro, resultados) => {
        if (erro) throw erro;
        
        if (resultados.length > 0) {
            res.json({ sucesso: true, mensagem: 'Usuário válido!' });
        } else {
            res.json({ sucesso: false, mensagem: 'Usuário ou senha inválidos!' });
        }
    });
});

app.listen(porta, () => {
    console.log(`API rodando na porta ${porta}`);
});
