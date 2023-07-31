import React, { useReducer, useState } from 'react'

function DemoReducer() {
    const [initCount, setCount] = useState(10);
    //sử dụng reducer
    const reducer = (state, action) =>{
        switch(action){
            case "UP_ACTION":
                return state+1;
            case "DOWN_ACTION":
                return state-1;
            default:
                return state;
        }
    }

    //useREducer in hook
    const [count,dispatchEvent] = useReducer(reducer, initCount)

  return (
    <div>
        <h2>
            Demo: Reducer / useReducer
        </h2>
        <h3 className='alert alert-danger'>
            Current count:{count}
        </h3>
        <button className='btn btn-success m-1' onClick={()=>dispatchEvent('UP_ACTION')}>Up</button>
        <button className='btn btn-danger m-1' onClick={()=>dispatchEvent('DOWN_ACTION')}>Down</button>
    </div>
  )
}

export default DemoReducer