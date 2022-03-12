//importar o .env

require('dotenv').config();


//aqui estão minhas importações principais

const express = require('express'); // o express é modulo principal do node
const mongoose = require('mongoose');
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
const todoRoutes = require('./models/Todo.js');

app.use('/todo', todoRoutes)

app.get('/', (req, res)=>{
    res.json({
        message: "Olá meu querido"
    });
});

const server = app.listen(8081,()=>{
//Endereço completo http://localhost:8081
    const host = server.address().address //endereco http://localhost
    const port = server.address().port //Porta 8081 

    console.log(`Seu servidor está funcionado na porta ${port} e no endereço ${host}`);
})

// const DB_USER = process.env.DB_USER
// const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

//Essa parte é a conexão com o banco de dados

// mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apitodo.nz7va.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)

// .then(()=>{
//     console.log('Conectamos ao DB')
//     app.listen(8081)
// })
// .catch((error)=>console.log(err));