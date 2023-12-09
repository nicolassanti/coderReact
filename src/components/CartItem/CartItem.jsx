import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { BsFillCartDashFill } from "react-icons/bs";

function CartItem({item}) {

    const {removeItem,cantParcial } = useContext(CartContext);
  
  return (
    <>
              <div className="d-flex flex-row justify-content-around align-items-center ">
                <div className="w-25">{item.prod.title}</div>
                <div className="w-25">{item.prod.price}</div>
                <div className="w-25">{item.cantidad}</div>
                <div className="w-25">{cantParcial(item)}</div>
                <div>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      removeItem(item);
                    }}
                  >
                    <BsFillCartDashFill />
                  </button>
                </div>
              </div>

    </>
  )
}

export default CartItem