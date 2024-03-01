const express = require("express");
const cors = require("cors")
const imageRoute = require("./router/imagesRoute")
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const app = express()

// cors origin
app.use(cors({origin:"http://localhost:5173/"}))

app.use(express.json())

// image router
app.use("/images",upload.single('imgUplod'),imageRoute)

// home route
app.get("/",(req,res)=>{
    res.send("welcome to my server")
    console.log(req.body);
})


// 404 error pages
app.use((req,res,error)=>{
    res.send("<h1>404 Pages is not found</h1>")
})


module.exports = app;