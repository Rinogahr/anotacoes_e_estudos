const express = require('express');
const res = require('express/lib/response');
const app = express();
const data = require("./data.json");


app.use(express.json());


// Verbos HTTP
//GET : rECEBER DADOS DE U M RESOUCE.
//POST : ENVIAR DADOS OU INFORMAÇÕES PARA SEREM PROCESSADOS POR UM RESOUCER.
//PUT : ATUALIZAR DADOS DE UM RESOURCE.
//DELETE : DELETAR UM RESOUCE.

//http://localhost:3000/clients

app.get("/clients", function( request, response){
    response.json(data);
});

app.get("/clients/:id", function( request, response){
    const { id } = request.params;
    const cl = data.find( cli => cli.id == id);

    if(!cl) return response.status(204).json();

    response.json(cl);
});

app.post("/clients", function( request, response){
    const { nome, sexo, idade } = request.body;

    response.json({nome, sexo, idade});
});


app.put("/clients/:id", function( request, response){
    const { id } = request.params;
    const cl = data.find( cli => cli.id == id);

    if(!cl) return response.status(204).json();

    const { nome, sexo, idade } = request.body;

    cl.nome = nome

    response.json(cl); 
});


app.delete("/clients/:id", function( request, response){
    const { id } = request.params;
    const clFilltered = data.filter( cli => cli.id != id);

    if(!clFilltered) return response.status(204).json();

    response.json(clFilltered); 
});

app.listen(3000, function(  ){
    console.log('Server is running');
});