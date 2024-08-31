import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
     
        userName:'Raju',
        email:'Raju@7755',
        age : 55
  }

  let newArray = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4   mb-5 text-center font-bold 
       rounded-xl'>Tailwind css props</h1>
       <Card   username= "cofeeaurreact" BtnText = "click me"/>
       <Card username="Hitesh" BtnText = "click here"/>
      
    </>
  )
}

export default App
