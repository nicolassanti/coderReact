import { useState,useEffect } from 'react'
import Item from '../Item/Item'
import './itemListContainer.css'

function ItemListContainer() {

  const[productos,setProductos] = useState([])
  const[categorias,setCategorias] = useState([])

  useEffect(() => {
    
   fetch('./data/products.json')
            .then(res=>res.json())
            .then(productos=>{
              const categorias=productos.map(producto=> producto.category);
              const categoriasUnicas=[...new Set(categorias)];
              setCategorias(categoriasUnicas)
              setProductos(productos)
            })
    }, [])
          
  return (
    
    <>
    {
      productos.length==0?
      <p>Cargando productos....</p>
      :
      productos.map((product,indice)=>{
        return(
            <Item className='sarasa' key={indice} prod={product}/>
        )
      })
    }
    </>
  )
}

export default ItemListContainer