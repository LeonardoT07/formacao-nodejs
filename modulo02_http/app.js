var http = require("http");

http.createServer((req, resp) => {
    resp.end("<h1>Resposta do servidor.</h1>");
}).listen(5555);

console.log("Meu servidor está rodando!");