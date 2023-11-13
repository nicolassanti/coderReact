import Brand from './Brand/Brand'
import ListItem from "./Items/ListItems";
import CartWidget from "./CartWidget/CartWidget"
import './navbar.css'
import { useState , useEffect} from 'react';

const Navbar = ()=>{
  

    return (
        <header className='navbar'>
         <Brand/>
            <ul className="itemList">
             <ListItem>Inicio</ListItem>
             <ListItem>Productos</ListItem>
             <ListItem>Nosotros</ListItem>
            </ul>
            <CartWidget/>
        </header>
        )
}

export default Navbar