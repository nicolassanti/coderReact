import './cartWidget.css'
import cartImg from '../../../assets/carrito.svg'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/cartContext'
import { useContext } from 'react'


function CartWidget() {

  const {cart, getTotalItems} = useContext(CartContext)


  return (
    <div id='cartWidget'>
    <label>{getTotalItems(cart)}</label>
      <Link to={"/carrito"}>
        <img className='carrito' src={cartImg} alt='imagen de carrito'/>
      </Link>
    </div>
  )
}

export default CartWidget