const express = require ("express")
const cors = require ("cors")

const app = express()
app.use(cors(
    {
        origin:[""],
        methods:["POST","GET"],
        credentials: true
    }
))

var username = "adline"
var password = 123
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/login",function(req,res)
{
    console.log(req.body.username)
    console.log(req.body.password)
    if(req.body.username === username && Number(req.body.password) === password)
    {
        res.send(true)
    }
    else{
        res.send(false)
    }
})

app.listen (5001,function(){
    console.log("Server Started...")
});