import Brand from './Brand/Brand'
import CartWidget from "./CartWidget/CartWidget"
import CategoryListContainer from '../categoryListContainer/CategoryListContainer';
import './navbar.css'

const Navbar = ()=>{
  
    return (
        <header className='navbar'>
            <Brand/>
            <CategoryListContainer/>
            <CartWidget/>
        </header>
        )
}

export default Navbar