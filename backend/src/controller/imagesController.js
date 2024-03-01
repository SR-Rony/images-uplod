// get images route
const getImg = (req,res)=>{
    try{
        res.send("i am image router")

    }catch(error){
        res.send(error)
    }
}

// post images route
const postImg = async(req,res)=>{
    try{
        console.log(req.body);
    }catch(error){
        res.send(error)
    }
}

module.exports = {getImg,postImg}