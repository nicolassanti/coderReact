import './cartWidget.css'
import cartImg from '../../../assets/cart-shopping-solid.svg'

function CartWidget() {
  return (
    <div id='cartWidget'>
    <label>5</label>
    <img className='carrito' src={cartImg} alt='imagen de carrito'/>
    </div>
  )
}

export default CartWidget