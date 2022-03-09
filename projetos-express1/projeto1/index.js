// primeiro app node-express
// variavel que receberá o modulo

var express = require('express');
//objeto para fazermos uso dentro da aplicação
var app = express();

app.get('/', (req, res) => {
    res.send('Hello World NodeJS! Componente padrão');
});

app.get('/uma-lista',(req, resp)=>{
res.send('Esse é o conteudo para uma pagina componente(uma lista)');
});

app.get('/zf*zy', (res, req)=>{
    res.send('Novo componente acessado a partir de rota customizada');
})

//vamos implementar o escutador da requisição

var server = app.listen(8081, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log(`O Servidor pode ser acessado em http://${host}:${port}`);
    // console.log('O servidor poder ser acessado em http://%s:%s',host, port);
});

