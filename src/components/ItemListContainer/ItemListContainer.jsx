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
                console.log("le filtree",prodFiltrados)
              /setProductos(prodFiltrados)                
              } else {
                setProductos(productos)
              }
            })
    }, [categoryId])
          
  return (
    
    <>
    {
      productos.length==0?
      <div className="spinner-border text-success"></div>
      :
      productos.map((product,indice)=>{
        return(
            <Item className='d-flex flex-row flex-wrap' key={indice} prod={product}/>
        )
      })
    }
    </>
  )
}

export default ItemListContainer