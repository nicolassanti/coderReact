import React, { useState } from 'react'
import cartImg from '../../assets/carrito.svg'

function Contador({inicial,stock,onAdd}) {

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
        <div className='container d-flex flex-column m-2'>
          <div className='d-flex flex-row mt-4'>
            <button className='btn btn-secondary' onClick={decrementar}>-</button>
            <span className='m-2'>{count}</span>
            <button className='btn btn-secondary' onClick={incrementar}>+</button>
          </div>
          <button className='btn btn-outline-success w-50 mt-4' onClick={()=> onAdd(count)}><img className='w-50' src={cartImg} alt='imagen de carrito'/></button>
        </div> 
    </>
  )
}

export default Contador