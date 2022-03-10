//Contruir o modelo da nossa applição

const moongoose = require('mongoose');

const Todo = mongoose.model('Todo',{
    description:String
});

module.exports = Todo;