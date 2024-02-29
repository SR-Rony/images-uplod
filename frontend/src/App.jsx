import React, { useState } from 'react';
import './App.css'
import  axios from "axios"


function App() {
  const [input, setInput] = useState("")
  const [images, setImages] = useState("")

  // input handle change 
  const handleImg =(e)=>{
    const imgSrc = e.target.files
    
    let reader = new FileReader();

    reader.onload=()=>{
      setImages(reader.result)
    }

    reader.readAsDataURL(imgSrc[0])
  }

  // handle button click
   const handleClick =()=>{
    console.log(input);
    console.log(images);
   }

  return (
    <>
      <input className='ring ring-blue-950' type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <input onChange={handleImg} type="file"  />
      <button onClick={handleClick} className='py-2 px-4 bg-blue-900 text-white rounded-md'>Uplod</button>
    </>
  )
}

export default App
