import './categoryListContainer.css'
import { NavLink } from 'react-router-dom'

function CategoryListContainer() {
 
    const categorias =['Bombillas', 'Mates', 'Materas', 'Accesorios']

    return (
    <>
    {
      categorias.map((categoria,indice) =>{
        return(
          <div key={indice} id='navContainer' className='listItem'>
            <NavLink className="listItemStyle" to={categoria}>{categoria.toUpperCase()}</NavLink>
          </div>
        )
    })
    }
    </>
  )
}

export default CategoryListContainer