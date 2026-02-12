const express=require ("express")
const { get } = require("http")
const cors=require("cors")
const app = express()
app.use(cors())
const email="guna@gmail.com"
const password=1234
app.use(express.json())

app.post("/login",function(req,res)
{
    if(req.body.email===email&&req.body.password==password)
    {
        res.send(true)
    }
    else
    {
        res.send(false)
    }
})
app.listen(5000,function(){
    console.log("server statred")
})