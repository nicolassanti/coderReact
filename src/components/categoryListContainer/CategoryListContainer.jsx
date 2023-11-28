import {useState,useEffect} from 'react'
import './categoryListContainer.css'
import { NavLink } from 'react-router-dom'

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
      <div className="spinner-border text-dark"></div>
      :
      categorias.map((categoria,indice) =>{
        return(
          <div key={indice} className='listItem'><NavLink className='listItemStyle' to={categoria}>{categoria.toUpperCase()}</NavLink></div>
        )
    })
    }
    </>
  )
}

export default CategoryListContainer