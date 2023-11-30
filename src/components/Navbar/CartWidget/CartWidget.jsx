import './cartWidget.css'
import cartImg from '../../../assets/carrito.svg'
import { Link } from 'react-router-dom'

function CartWidget() {
  return (
    <div id='cartWidget'>
    <label>5</label>
      <Link to={"/carrito"}>
        <img className='carrito' src={cartImg} alt='imagen de carrito'/>
      </Link>
    </div>
  )
}

export default CartWidget