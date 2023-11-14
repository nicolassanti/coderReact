import { useState,useEffect } from 'react'
import Item from '../../Item/Item'
import './itemListContainer.css'

function ItemListContainer() {

  const[productos,setProductos] = useState([])

  useEffect(() => {
    
   fetch('./data/products.json')
            .then(res=>res.json())
            .then(json=>setProductos(json))
    }, [])
          
  return (
    
    <ul className='d-flex flex-wrap'>
    {
      productos.length==0?
      <p>Cargando productos....</p>
      :
      productos.map((product,indice)=>{
        return(
            <Item key={indice} prod={product}/>
        )
      })
    }
    </ul>
  )
}

export default ItemListContainer