import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(15);
  //let counter=15
  const addValue=()=>{
    if(counter<20){setcounter(counter+1);
    console.log("Clicked",counter);}
  }
  const removeVale=()=>
  {
    if(counter>0){setcounter(counter-1);}
  }

  return (
    <>
      <h1>Basic Value Updater</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeVale}> remove Value</button>
    </>
  )
}

export default App
