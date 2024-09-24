import { useState } from 'react'
import './App.css'
import Boite from './Boite'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Boite/>
    </>
  )
}

export default App
