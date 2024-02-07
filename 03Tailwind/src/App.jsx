import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import tailwindConfig from '../tailwind.config'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Heman Sharma",
    agr:21
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Persons</h1>
      <Card username="Heman Sharma " bio="Backend developer" imageLink="https://avatars.githubusercontent.com/u/101355643?v=4"/>
      <Card username="Eshan Sharma"  bio="Medical Student" imageLink=""/>
    </>
  )
}

export default App
