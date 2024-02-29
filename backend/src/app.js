const express = require("express");
const cors = require("cors")
const app = express()

app.use(cors({origin:"http://localhost:5173/"}))

app.get("/",(req,res)=>{
    res.send("welcome to my server")
})

app.use((req,res,error)=>{
    res.send("<h1>404 Pages is not found</h1>")
})


module.exports = app;