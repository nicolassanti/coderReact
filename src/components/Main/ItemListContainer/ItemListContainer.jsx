import { useState,useEffect } from 'react'
import Item from '../../Item/Item'
import './itemListContainer.css'

function ItemListContainer() {

  const[productos,setProductos] = useState([])

  useEffect(() => {
    
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProductos(json))
  }, [])
  


  return (
    
    <ul className='d-flex flex-wrap'>
    {
      productos.length==0?
      <p>Cargando productos....</p>
      :
      <Item prods={productos}/>
    }

    </ul>


  )
}

export default ItemListContainer