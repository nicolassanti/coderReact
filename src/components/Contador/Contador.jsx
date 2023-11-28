import React, { useState } from 'react'

function Contador({inicial,stock}) {

    const[count, setCount]=useState(inicial)

    const incrementar=()=>{
       if(count<stock)
        setCount(count+1)
    }

    const decrementar=()=>{
        if(count>inicial){
            setCount(count-1)
        }
    }



  return (
    <>
        <div className='container d-flex flex-row mt-4'>
        <button className='btn btn-secondary' onClick={decrementar}>-</button>
        <span className='m-2'>{count}</span>
        <button className='btn btn-secondary' onClick={incrementar}>+</button>

        </div> 
    </>
  )
}

export default Contador