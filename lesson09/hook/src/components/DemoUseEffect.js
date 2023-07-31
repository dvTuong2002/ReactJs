import React, { useEffect } from 'react'

export default function DemoUseEffect() {
    const [count,setCount]=useState(0);
    //hàm useEffect là 1 hook -> có 3 cách sử dụng
    useEffect(()=>{
        console.log("Use Effect callback function");
        StyleSheetList([
            ...FileList,
            count
        ])
    })

    const handleClick = ()=>{
        setCount(prev=>prev+1)
    }
  return (
    <div>
        <h2>Demo useEffect</h2>
        <p>Curent Count: {count}</p>
        <button onClick={handleClick}>Click here</button>
    </div>
  )
}
