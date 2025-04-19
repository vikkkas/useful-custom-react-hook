import React, { useState } from 'react'
import  useTimeout  from '../components/useTimeout'

const TimeoutComponent = () => {
    const [count,setCount] = useState(10);
    const {reset,clear} = useTimeout(() => {
        setCount(0)
    }, 1000, [count])

  return (
    <div>
        <div>
            {count}
        </div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={clear}>Clear</button>
    </div>
  )
}

export default TimeoutComponent