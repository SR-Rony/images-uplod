const express = require("express");
const cors = require("cors")
const imageRoute = require("./router/imagesRoute")
const multer  = require('multer')
const path = require('node:path'); 
const app = express()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        // console.log(file,file.originalname,path.extname(file.originalname));
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //   cb(null, file.fieldname + '-' + uniqueSuffix)
      cb(null, uniqueSuffix+path.extname(file.originalname))
    }
  })

  const upload = multer({ storage: storage })




// cors origin
app.use(cors({origin:"http://localhost:5173/"}))

app.use(express.json())

app.use("/profile",express.static(`${__dirname}/public/images`))
console.log(`${__dirname}./public/images`);

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