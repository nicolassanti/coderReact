import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import CartItem from "../CartItem/CartItem";
import Card from "react-bootstrap/Card";
import { BsCartXFill } from "react-icons/bs";
import './cart.css'
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cart() {
  const {totalPrice, cart, removeItems } =
    useContext(CartContext);

  return (
    <div className="d-flex flex-column flex-container justify-content-center align-items-center m-4 p-4 w-100">
    <Card className="w-75 p-4">


      <div className="d-flex-container flex-column flex-wrap justify-content-between ">
        <div className="d-flex flex-row justify-content-around ">
          <div>Producto</div>
          <div>Precio unitario</div>
          <div>Cantidad</div>
          <div>Total por Producto</div>
          <div>Eliminar Producto</div>
        </div>
        {cart.length == 0 ? (
          <div className="d-flex flex-column justify-content-center align-items-center m-2 p-1 ">
          <Alert  variant='warning'>
          No hay productos en el carrito...
        </Alert>
          </div>
        ) : (
          cart.map((item, indice) => {
            return (
              <Card key={indice}>
                <Card.Body>
                  <CartItem item={item} />
                </Card.Body>
              </Card>
            );
          })
        )}
        <button
        className="btn btn-outline-danger w-pers m-4"
        onClick={() => {
          removeItems();
        }}
      >
        <BsCartXFill className="w-50 h-50"/>
      </button>
        <strong>TOTAL CARRITO: {totalPrice.toFixed(2)} </strong>
      </div>
      </Card>
      <Link to={'/checkout'}>Finalizar compra </Link>
    </div>
  );
}

export default Cart;
