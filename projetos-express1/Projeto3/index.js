const express = require('express'); // o express é modulo principal do node
const mongoose = require('moongoose');
const cors = require('cors') // o cors facilita a conexão entre as portas (Back e Front)

const  app = express();
app.use(cors()); // use no app o cors

//Importando o modelo da nossa aplicação
const Todo=require('./models/Todo');

//leitura do Jason / middlewares
app.use(
    express.urlencoded({
        extended:true
    })
);
app.use(express.json());

//Vamos trabalhar com rotas do api
const todoRoutes = require();


