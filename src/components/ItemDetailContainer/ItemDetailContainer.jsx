import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'


function ItemDetailContainer() {

    const[producto,setProducto] = useState([])
    const {prodId} =useParams()

    useEffect(() => {
      fetch('../data/products.json')
            .then(res =>res.json())
            .then((productos) => {
                       const prodFiltrado=productos.find((producto)=>prodId==producto.id)
                       setProducto(prodFiltrado)
                    })
    }, [prodId])
    
  return (
    <>
    <ItemDetail className='d-flex flex-wrap' prod={producto}/>
    </>
  )
}

export default ItemDetailContainer