const mongoose = require('mongoose');
const Contato = mongoose.model('Contato', {
    nome: String,
    telefone: Number,
    email: String,
    cidade: String

});

module.exports = Contato;