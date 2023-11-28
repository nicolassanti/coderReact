import { NavLink } from "react-router-dom"
import './brand.css'

function Brand() {
  return (
    <>
    <div className='brand' id="brandLink">
      <NavLink className="brandInactive"  to={'/'}>Tuma-T</NavLink>
    </div>
    </>
  )
}

export default Brand
