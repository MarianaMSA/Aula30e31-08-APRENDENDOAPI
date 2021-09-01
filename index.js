const express = require ('express');
const app = express();
app.use(express.json());

const Conn = require ('./models/conn/conn');

Conn("localhost", 27017, "usuarios");

const port = 3000;

const usuario = require('./routes/usuarios.routes');
app.use = ('/usuarios', usuario)

// app.use('/usuario', usuario)



app.listen(port, () => {
    console.log (`App rodando na porta ${port}`);
})
