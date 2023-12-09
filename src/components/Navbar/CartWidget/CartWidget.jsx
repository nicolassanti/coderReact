import './cartWidget.css'
import cartImg from '../../../assets/carrito.svg'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/cartContext'
import { useContext } from 'react'


function CartWidget() {

  const {totalItems} = useContext(CartContext)


  return (
    <div id='cartWidget'>
    <label>{totalItems}</label>
      <Link to={"/carrito"}>
        <img className='carrito' src={cartImg} alt='imagen de carrito'/>
      </Link>
    </div>
  )
}

export default CartWidget