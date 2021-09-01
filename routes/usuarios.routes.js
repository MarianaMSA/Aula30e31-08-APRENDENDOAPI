const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario')


router.get('/', async (req,res) => {
    await Usuario.find({})
    .then((usuario) => {
        res.status(200).send(usuario);
    })
    .catch((err) => {
        res.status(400).send("Algo errado com a usuario, tente novamente");
        console.error = (err);
    })
});


router.post('/add', async (req, res) => {
    await Usuario.create(req.body)
    .then(() => {
        res.status(200).send('Usuario adicionado com sucesso');
    })
    .catch((err) => {
        res.status(400).send('Algo de errado com o usuario, tente novamente');
        console.error(err);
    })

})

router.get('/findById/:id', async (req, res) => {
    await Usuario.find({_id : req.params.id})
    .then((usuario) => {
        res.status(200).send(usuario);
    })
    .catch((err) => {
        res.status(400).send("Algo errado com a usuario, tente novamente");
        console.log(err);
    })
});


router.get('/findByName/:name', async (req, res) => {
    await Usuario.find({nome : req.params.name})
    .then((usuario) => {
        res.status(200).send(usuario);
    })
    .catch((err) => {
        res.status(400).send("Algo errado com a usuario, tente novamente");
        console.log(err);
    })
});

router.put("/update/:id", async (req, res) => {
    await Usuario.updateOne({_id : req.params.id},req.body)
    .then(() => {
        res.status(200).send("Atualizado com sucesso");
    })
    .catch((err) => {
        res.status(400).send("Algo errado com a usuario, tente novamente");
        console.log(err);
    });
});

router.delete("/delete/:id", async (req, res) => {
    await Usuario.deleteOne({_id : req.params.id})
    .then(() => {
        res.status(200).send("Deletado com sucesso");
    })
    .catch((err) => {
        res.status(400).send("Algo errado com a usuario, tente novamente");
        console.log(err);
    });
});


module.exports = router;