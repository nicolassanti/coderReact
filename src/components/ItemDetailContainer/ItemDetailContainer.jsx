import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Item from '../Item/Item'


function ItemDetailContainer() {

    const[producto,setProducto] = useState([])
    const {prodId} =useParams()

    useEffect(() => {
      fetch('../data/products.json')
            .then(res =>res.json())
            .then((productos) => {
                       const prodFiltrado=productos.find((producto)=>prodId==producto.id)
                       console.log("PF: ",prodFiltrado)
                       setProducto(prodFiltrado)
                    })
    }, [prodId])
    
  return (
    <>
    <Item className='d-flex flex-wrap' prod={producto}/>
    </>
  )
}

export default ItemDetailContainer