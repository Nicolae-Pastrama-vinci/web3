import { useState } from 'react'
import Statistics from '../Statistics/Statistics'
import Button from '../Button/Button'
import Loading from '../Loading/Loading'

const App = () => {
  // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [loading, setLoading] = useState(true)

    const handleGood = () => {
        const updatedGood = good + 1;
        setGood(updatedGood);
    }
    const handleNeutral = () => {
        const updateNeutral = neutral + 1;
        setNeutral(updateNeutral);
    }
    const handleBad = () => {
        const updatedBad = bad + 1;
        setBad(updatedBad);
    }
  
    const handleLoading = () => {
        const updatedLoading = false;
        setLoading(updatedLoading);
    }
    setTimeout(handleLoading, 3000);


    return (loading ? <Loading></Loading> :
        <div>
        <h1>give feedback</h1>
        <Button click={handleGood} value="good"></Button>
        <Button click={handleNeutral} value="neutral"></Button>
        <Button click={handleBad} value="bad"></Button>
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
        )
}

export default App