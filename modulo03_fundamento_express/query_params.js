const express = require("express");
const app = express();

const port = 5555;

app.get("/", function(requisicao, resposta){
    resposta.send("Rota raiz.");
});

/*  
 *  Segundo o professor, os query params estão caindo em desuso. 
 *  Utilizar os parametros na rota é mais seguro, melhor estruturado e também é possível utilizar parâmetros opcionais.
 */
app.get("/:nome", function(requisicao, resposta){
    var query = requisicao.query["sobrenome"];

    if(query){
        resposta.send("Seu nome + sobrenome é: " + requisicao.params.nome + " " + query);
    } else {
        resposta.send("Adicione na rota ?sobrenome=seusobrenome. ");
    }
});

app.listen(5555, function(error){
    if(error){
        console.log("Ocorreu um erro.");
    } else {
        console.log("Servidor inicializado com sucesso. Acesse http://localhost:" + port + " (Ctrl + Click)");
    }
});