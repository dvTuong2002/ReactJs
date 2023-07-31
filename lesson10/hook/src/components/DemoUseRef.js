import React, { useRef, useState } from 'react'

function DemoUseRef() {

    //useRef
    const [count, setCount] = useState(60);
    const timerId = useRef();

    const handleStart = () => {
        timerId.current = setInterval(()=>{
            setCount(prevCount => prevCount -1)
        }, 1000)
        console.log('Start ->',timerId.current);
    }

    const handleStop = () => {
        clearInterval(timerId.current);
        console.log('Stop ->', timerId.current);
    }

  return (
    <div>
        <h1>
            {count}
        </h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default DemoUseRef