import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const ClickCounter = ({title, message}) => {
  const handleClick = () =>{
    setCount((count) => count + 1);
  }
  const [count, setCount] = useState(0)
    return(
      <>
        <h1>{title}</h1>
        <button onClick={handleClick}>
            count is {count}
        </button>
        <p>{count >= 10 ? message : ''}</p>
      </>
    )
}

function App() {
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
          <ClickCounter title='Voici le compteur de clic' message='You are a master in the art of clicking !'/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
