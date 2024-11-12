const express = require('express');
const pool = require('./database');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM agenda');
    res.render('index', { alunos: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao carregar dados');
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Banco rodando na porta ${PORT}`));