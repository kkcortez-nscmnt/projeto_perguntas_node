const express = require("express")

app = express()
app.set('view engine', 'ejs')
app.use((express.static('public')))


app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/perguntar",(req, res)=>{
    res.render("perguntar")
})
app.listen(666)