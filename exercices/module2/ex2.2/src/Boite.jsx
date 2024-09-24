import './Boite.css'
import React  from 'react'
import { useState } from 'react'

const colors = [ "red", "green", "yellow", "magenta"];

const Boite = () => {
    const [id, setId] = useState(0);
    const handleId = () =>{
        const newId = (id+1)%colors.length;
        console.log(newId);
        setId(newId);
    }
    const currentColor = colors[id];
    return (
        <>
            <h1>{currentColor}</h1>
            <div class={"boite " + currentColor}>
                <button  onClick={handleId}>{colors[(id+1)%colors.length]}</button>
            </div>
        </>
    )
}
export default Boite