import React, { useState } from 'react';
import './App.css'
import  axios from "axios"


function App() {
  // cloud
  const [input, setInput] = useState("")
  const [images, setImages] = useState("")

  //multer
  const [imgMulter,setImgMulter]=useState("")

  // input handle change 
  const handleImg =(e)=>{
    const imgSrc = e.target.files
    setImgMulter(imgSrc[0])
    
    let reader = new FileReader();

    reader.onload=()=>{
      setImages(reader.result)
    }

    reader.readAsDataURL(imgSrc[0])
  }

  // handle button click
   const handleClick =async()=>{
    console.log(input);
    console.log(images);
    // const myImg =async()=>{
    //   await axios.post("http://localhost:8000/images",{
    //     images:images
    //   })
    // }
    // myImg()

    // multer images uplod
     
     let reqOptions = {
       url: "http://localhost:8000/images",
       method: "post",
       headers: {
        "Content-Type":"multipart/form-data"
       },
       data: {
        imgUplod:imgMulter,
        demo:"request"
       },
     }
     
     let response = await axios.request(reqOptions)
     console.log(response.data);
   }

  return (
    <>
      <input className='ring ring-blue-950' type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <input name='imgUplod' onChange={handleImg} type="file"  />
      <button onClick={handleClick} className='py-2 px-4 bg-blue-900 text-white rounded-md'>Uplod</button>
    </>
  )
}

export default App
