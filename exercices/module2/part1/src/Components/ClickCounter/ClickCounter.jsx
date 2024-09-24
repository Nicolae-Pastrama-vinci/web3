import { useState } from 'react'

const ClickCounter = ({title, messageClicks, message }) => {
    const db = JSON.parse(localStorage.getItem("count"));
    const [count, setCount] = useState(db);
    const [enter, setEnter] = useState(false);
    
      return(
        <>
          <h1>{title}</h1>
          <button 
            onClick={() => {
                setCount((count) => count + 1);
                localStorage.setItem("count", JSON.stringify(count)); 
              }
            } 
            onMouseEnter={()=> {
                setEnter(true)
              }
            } 
            onMouseLeave={() => {
                setEnter(false)
              }
            }>
              {enter ? <p>{message}</p> : null}
              count is {count}
          </button>
          <p>{count >= 10 ? messageClicks : ''}</p>
        </>
      )
}

export default ClickCounter