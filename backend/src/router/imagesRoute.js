const { getImg, postImg } = require("../controller/imagesController");

const route = require("express").Router();

// get images
route.get("/",getImg)
// post images
route.post("/",postImg)

module.exports= route