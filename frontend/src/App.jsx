import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")

  return (
    <>
      <input className='ring ring-blue-950' type="text" />
      <input type="file"  />
      <button className='py-2 px-4 bg-blue-900 text-white rounded-md'>Uplod</button>
    </>
  )
}

export default App
