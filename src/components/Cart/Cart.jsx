import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
function Cart() {
  const [variable, setVariable] = useState(false);

  const { cart ,setCart,addToCart} = useContext(CartContext);

  return (
    <>
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
                  <div>{item.title}</div>
                  <div>{item.price}</div>
                  <div>{item.cantidad}</div>
                  <div>{ item.price * item.cantidad}</div>
                </div>
              
              
              )
          })
        )}

        <strong>TOTAL CARRITO: {
          cart.map((item)=>{
            let total=0
            return total =Math.round(total + (item.price*item.cantidad),2)
          })
        }</strong>
      </div>
    </>
  );
}

export default Cart;
