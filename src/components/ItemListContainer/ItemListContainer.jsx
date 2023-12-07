import { useState,useEffect } from 'react'
import Item from '../Item/Item'
import './itemListContainer.css'
import { useParams } from 'react-router-dom'

function ItemListContainer() {

  const[productos,setProductos] = useState([])
  const {categoryId} = useParams()

  useEffect(() => {
    
   fetch('./data/products.json')
            .then(res=>res.json())
            .then(productos=>{
              if (categoryId) {
                const prodFiltrados=productos.filter((p)=>p.category === categoryId)
              /setProductos(prodFiltrados)                
              } else {
                setProductos(productos)
              }
            })
    }, [categoryId])
          
  return (
    
    <div className='d-flex flex-row flex-wrap justify-content-around'>
    {
      productos.length==0?
      <div className="spinner-border text-success"></div>
      :
      productos.map((product,indice)=>{
        return(
            <Item key={indice} prod={product}/>
        )
      })
    }
    </div>
  )
}

export default ItemListContainer