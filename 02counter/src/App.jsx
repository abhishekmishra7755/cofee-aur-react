import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


  function App(){
  
  let [Counter, setCounter] = useState(0)  
  
 

    const inceraseValue = () => {
         //Counter = Counter+1
        
         if( Counter<20){
          setCounter( Counter + 1) 
         }
        

    }



    const decreaseValue = () => {
        //Counter = Counter-1 
          
        if(Counter>0){
          setCounter(Counter - 1)
        }
   
      
    }

  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value is: </h2>

     <button onClick={inceraseValue}>increase Value </button>
     <br/>
    
     <div> {Counter} </div>
     
          
             
     <button onClick={decreaseValue}>decreasValue </button>
     <footer></footer>
      
    </>
  )
}

export default App
