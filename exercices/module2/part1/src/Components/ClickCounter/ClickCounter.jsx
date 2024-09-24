import { useState } from 'react'

const ClickCounter = ({title, messageClicks, message }) => {
    const handleClick = () =>{
      setCount((count) => count + 1);
    }
    
    const handleEnter = () =>
     {
        setEnter(true);
    }
    const handleLeave = () =>{
      setEnter(false);
    }
    const [count, setCount] = useState(0);
    const [enter, setEnter] = useState(false);
      return(
        <>
          <h1>{title}</h1>
          <button onClick={handleClick} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
              {enter ? <p>{message}</p> : null}
              count is {count}
          </button>
          <p>{count >= 10 ? messageClicks : ''}</p>
        </>
      )
}

export default ClickCounter