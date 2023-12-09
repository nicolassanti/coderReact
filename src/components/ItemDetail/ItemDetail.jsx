import { Card } from "react-bootstrap";
import Contador from "../Contador/Contador";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import "./itemDetail.css";
import { BsFillCartCheckFill } from "react-icons/bs";

function ItemDetail({ prod }) {
  const { addToCart } = useContext(CartContext);
  const [cant, setCant] = useState(0);

  const onAdd = (cantidad) => {
    setCant(cantidad);
    addToCart({ prod, cantidad });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Card className="w-50 m-4 d-flex flex-row justify-content-center align-items-center">
        <section>
          <Card.Img className="w-75 p-2 m-4" variant="top" src={prod.image} />
          {cant == 0 ? (
            <Contador className="" inicial={1} stock={prod.qty} onAdd={onAdd} />
          ) : (
            <Link className="d-flex justify-content-center align-items-center " to="/carrito">
              <button className="btn btn-outline-info align-self-center w-50 m-4">
                <BsFillCartCheckFill/>
              </button>
            </Link>
          )}
        </section>

        <Card.Body style={{ width: "34rem" }}>
          <Card.Title>
            <h4>{prod.title}</h4>
          </Card.Title>
          <Card.Text>{prod.description}</Card.Text>
          <div>
            <strong>Precio: </strong> ${prod.price}
          </div>
          <div>
            <strong>Stock: </strong> {prod.qty}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetail;
