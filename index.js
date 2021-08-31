const express = require ('express');
const mongoose = require('mongoose');
// const usuarioModel = require('./models/usuario');


mongoose.connect('mongodb://localhost:27017/usuarios', {
    useNewUrkParser: true,
    useUnifiedTopology: true,
})

// const Usuario = mongoose.model("Usuario", usuarioModel);

// const usuario1 = new Usuario({
//     nome: "Mariana",
//     sobrenome: "Maia Salvador de Assis",
//     cpf: "000.000.000-00",
//     idade: new Date(),
//     senha: "123456"
// })

// usuario1.save()
// .then(() =>{
//     console.log('Filme Salvo')
// })
// .catch((err)=>{
//     console.error(err)
// })

Usuario.find({})
.then((usuarios) => {
    console.log(usuarios)
})
.catch((err) => {
    console.error(err);
})

Usuario.find({_id: '612d6f8d89b9c8088c708bb6'})
.then((usuarios) => {
    console.log('Retorna por ID:', usuarios)
})
.catch((err) => {
    console.error(err);
})

Usuario.findByIdAndDelete('612d6f8d89b9c8088c708bb6')
.then((usuarios) => {
    console.log('Usuario excluido')
})
.catch((err) => {
    console.error(err);
})

const app = express();
const port = 3000;


app.get("/", (req,res)=> {
    res.send('Hello Bluemrs');
})

app.listen(port, () => {
    console.log ('App rodando na porta 3000');
})
