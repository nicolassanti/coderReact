import {useState,useEffect} from 'react'
import './categoryListContainer.css'
import { Link } from 'react-router-dom'

function CategoryListContainer() {
 
    const[categorias,setCategorias]= useState([])
    
    useEffect(() => {
     fetch('./data/products.json')
        .then((response)=>response.json())
        .then((productos)=>{
            const categorias=productos.map(producto=> producto.category);
            const categoriasUnicas=[...new Set(categorias)];
            setCategorias(categoriasUnicas)
        })
    }, [])


    return (
    <>
    {
      categorias.length==0?
      <p>Cargando categorias...</p>
      :
      categorias.map((categoria,indice) =>{
        return(
          <span key={indice} className='listItem'><Link to={categoria}>{categoria.toUpperCase()}</Link></span>
        )
    })
    }
    </>
  )
}

export default CategoryListContainer