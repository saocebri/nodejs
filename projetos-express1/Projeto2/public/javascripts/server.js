//Criando uma constante que recebe a porta de acesso.
const PORT = 8080;

// shift + Alt + A ==>comenta o codigo inteiro ou parte dele.
// ctrl + ; ==> comenta a linha a linha
const express = require('express');
//objeto para fazermos  uso dentro da aplicação
const app = express();

app.use(express.static('public'));

//vamos implementar um escutador da requisição

 const server = app.listen(PORT, ()=>{
     const host = server.address().address;
     const port = server.address().port;

     console.log(`Nosso servidor esta funcionando na porta http://${host}:${port}`);
 });