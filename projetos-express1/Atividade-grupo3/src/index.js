const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Contato = require('./models/Contato');

const app = express();
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
    extended:true
}));

const server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Servidor rodando no endereço ${host}:${port}`)
})
