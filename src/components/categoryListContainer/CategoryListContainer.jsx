import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './categoryListContainer.css'

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
          <div key={indice} className='listItem'><Link  className='listItemStyle' to={categoria}>{categoria.toUpperCase()}</Link></div>
        )
    })
    }
    </>
  )
}

export default CategoryListContainer