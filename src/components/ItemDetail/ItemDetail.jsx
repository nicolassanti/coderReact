import {Button, Card} from 'react-bootstrap'
import Contador from '../Contador/Contador';
import React, {useState} from 'react';
import './itemDetail.css'
import { Link } from 'react-router-dom';



function ItemDetail({prod}) {

const[cantidad,setCantidad]=useState(0)

const onAdd=(qty)=>{
  setCantidad(qty)
  alert(`Agregaste ${qty}`)
}




  return (
    <div className='d-flex justify-content-center align-items-center'>
    <Card className='w-25 m-1 d-flex flex-row'>
      <section>
      <Card.Img className='w-50' variant="top" src={prod.image} />
      {
        cantidad ==0? 
      <Contador className="" inicial={1} stock={prod.qty} onAdd={onAdd}/>
        :
        <Link to="/carrito"><button className='btn btn-outline-info m-4'>Ir al carrito</button></Link> 
      
      }

      </section>
      
      
      <Card.Body style={{ width: '34rem' }}>
        <Card.Title><h4>{prod.title}</h4></Card.Title>
        <Card.Text >
          {prod.description}
        </Card.Text>
            <div><strong>Precio: </strong> ${prod.price}</div>
            <div><strong>Stock: </strong> {prod.qty}</div>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default ItemDetail