const express = require("express");
const app = express();

const port = 5555;

app.get("/", function(requisicao, resposta){
    resposta.send("Rota raiz.");
});

// app.get("/:nome", function(requisicao, resposta){
//     resposta.send("Olá " + requisicao.params.nome + " você acessou a rota com seu nome.");
// });

// Essa rota é "igual" a rota de cima, porém, com um parâmetro opcional que envia outra resposta
app.get("/:nome/:sobrenome?", function(requisicao, resposta){
    var sobrenome = requisicao.params.sobrenome;
        
    if(sobrenome){
        resposta.send(
            "Olá " + requisicao.params.nome + 
            " " + requisicao.params.sobrenome + 
            " você acessou a rota com seu nome e sobrenome opcional."
        );
    } else {
        resposta.send("Olá " + requisicao.params.nome + " você acessou a rota com seu nome.");
    }
});

app.listen(5555, function(error){
    if(error){
        console.log("Ocorreu um erro.");
    } else {
        console.log("Servidor inicializado com sucesso. Acesse http://localhost:" + port + " (Ctrl + Click)");
    }
});