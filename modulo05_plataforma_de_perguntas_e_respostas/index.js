const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Perguntas = require("./database/Perguntas");
const Respostas = require("./database/Respostas");

// Connection Database
connection
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((msgError) => {
        console.error(msgError);
    });

// Indica para o Express usar o EJS como View Engine
app.set('view engine', 'ejs');
app.use(express.static('public'));


// BodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); // permite lermos dados de formulários enviados via json


// Rotas
app.get("/", (req, res) => {
    Perguntas.findAll({ 
        raw: true,
        order: [
            ['id', 'DESC'],
        ], })
    .then((listaPerguntas) => {
        res.render("index", {
            listaPerguntas
        }); 
    });
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.get("/pergunta/:id", (req, res) => {
    var id = req.params.id;

    Perguntas.findOne({ where: { id: id } })
    .then((pergunta) => {
        
        if(pergunta != undefined){

            Respostas.findAll({ 
                where: { perguntaId: pergunta.id },
                order: [
                    ['id', 'DESC'],
                ]
            }).then((respostas) => {
                res.render('pergunta', {
                    pergunta,
                    respostas
                });
            });

        } else {
            res.redirect("/");
        }
    });
});

app.post("/salvar-pergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    Perguntas.create({
        titulo: titulo,
        descricao: descricao,
    })
    .then(() => {
        res.redirect("/");
    });
});

app.post("/responder-pergunta", (req, res) => {
    var corpo = req.body.corpo;
    var perguntaId = req.body.pergunta;

    Respostas.create({
        corpo: corpo,
        perguntaId: perguntaId,
    })
    .then(() => {
        res.redirect("/pergunta/"+perguntaId);
    });
});


app.listen(8080, () => {
    console.log("App rodando: http://localhost:8080 (Ctrl+Click)");
});