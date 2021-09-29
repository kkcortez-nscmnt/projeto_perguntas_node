const express = require("express")

app = express()
app.set('view engine', 'ejs')
app.use((express.static('public')))
app.use(express.urlencoded({extended:true})) // traduz os dados de um formulário recebido  para uma estrutura js
app.use(express.json()) // ler dados de formulários enviados via json.


app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/perguntar",(req, res)=>{
    res.render("perguntar")
})

app.post("/salvarpergunta", (req, res)=>{
    var titulo =req.body.titulo
    var descricao =req.body.descricao

    res.send("Formulário recebido! titulo: "  + titulo + " " + " descricao: " + descricao)

})
app.listen(666)

