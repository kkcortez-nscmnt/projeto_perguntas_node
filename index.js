const express = require("express")
const connection = require("./database/database")
const Pergunta = require("./database/Pergunta")
const Resposta = require("./database/Resposta")
const app = express()

connection
    .authenticate()
    .then(()=>{
        console.log("Conexão com banco de dados realizada com sucesso!")
    })
    .catch((msgErro) =>{
        console.log(msgErro)
    })

app.set('view engine', 'ejs')
app.use((express.static('public')))
app.use(express.urlencoded({extended:true})) // traduz os dados de um formulário recebido  para uma estrutura js
app.use(express.json()) // ler dados de formulários enviados via json.


app.get("/", (req, res)=>{
    Pergunta.findAll({ raw: true}).then(perguntas =>{
        
        res.render("index",{
            perguntas: perguntas // foi criado um json. Váriaveis dentro do HTML
        })
    })
})

app.get("/perguntar",(req, res)=>{
    res.render("perguntar")
})

app.post("/salvarpergunta", (req, res)=>{
    // Reecebe os dados do formulário
    var titulo =req.body.titulo
    var descricao =req.body.descricao
    // Salva os dados na tabela dos bancos de dados
    Pergunta.create({ // equivalente a CREATE INTO
        titulo : titulo,
        descricao: descricao
    }).then(()=>{
        res.redirect("/")
    })
})

app.get("/pergunta/:id", (req, res) =>{
    var id = req.params.id 
    Pergunta.findOne({
        where:{ id: id}
    }).then(pergunta =>{
        if(pergunta != undefined){
            res.render("pergunta", {
                pergunta: pergunta
            })
        }else{
            res.redirect("/")
        }
        
    })
})

app.listen(666)

