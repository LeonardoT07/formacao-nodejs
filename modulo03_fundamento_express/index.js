const express = require("express"); // Importando o express
const app = express();              // Inicializando o express em uma constante app
const port = 5555;

// Primeiro parâmetro: é a rota a ser acessada
// Segundo parâmetro:
// Req -> Dados enviados pelo usuário na requisição
// Res -> Resposta que será enviada para o usuário

app.get("/", function(requisicao, resposta){
    // console.log(requisicao); // é interessante executar isso para ver todos os dados de uma requisicao
    resposta.send("Resposta do servidor");
});

app.get("/leonardo", function(requisicao, resposta){
    resposta.send("Essa é minha rota personalizada.");
});

app.listen(5555, function(error){
    if(error){
        console.log("Ocorreu um erro.");
    } else {
        console.log("Servidor inicializado com sucesso. Acesse http://localhost:" + port + " (Ctrl + Click)");
    }
});