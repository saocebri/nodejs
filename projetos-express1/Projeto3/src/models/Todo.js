//Contruir o modelo da nossa applição

const mongoose = require('mongoose');

const Todo = mongoose.model('Todo',{
    description:String
});

module.exports = Todo;