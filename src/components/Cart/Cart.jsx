import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
function Cart() {
  const [variable, setVariable] = useState(false);

  const { cart ,getTotalItemsPrice,removeItems} = useContext(CartContext);

  return (
    <>
      <button className="btn btn-outline-danger" onClick={()=>{removeItems()}}>Limpiar Carrito</button>
      <div className="d-flex-container flex-row flex-wrap justify-content-around">
       <strong>
      <div className="d-flex flex-row justify-content-around ">
                  <div>Producto</div>
                  <div>Precio unitario</div>
                  <div>Cantidad</div>
                  <div>Total por Producto</div>
      </div>
       </strong>
        {cart.length == 0 ? (
          <div className="spinner-border text-success"></div>
        ) : (
          cart.map((item, indice) => {
            return (
                <div className="d-flex flex-row justify-content-around " key={indice}>
                  <div>{item.prod.title}</div>
                  <div>{item.prod.price}</div>
                  <div>{item.cantidad}</div>
                  <div>{ item.prod.price * item.cantidad}</div>
                </div>
              
              
              )
          })
        )}

        <strong>TOTAL CARRITO: 
        {
         () => {getTotalItemsPrice}
        }
        </strong>
      </div>
    </>
  );
}

export default Cart;
