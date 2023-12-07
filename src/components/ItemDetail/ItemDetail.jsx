import { Card } from "react-bootstrap";
import Contador from "../Contador/Contador";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import "./itemDetail.css";

function ItemDetail({ prod }) {

  const { addToCart} = useContext(CartContext);
  const [cant, setCant] = useState(0);
  const [product, setProduct] = useState([]);

  const onAdd = (cantidad) => {
    console.log("count",cantidad);
    setCant(cantidad)
    addToCart({prod,cantidad});

  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center ">
      <Card className="w-25 m-1 d-flex flex-row">
        <section>
          <Card.Img className="w-100" variant="top" src={prod.image} />
          {cant == 0 ? (
            <Contador className="" inicial={1} stock={prod.qty} onAdd={onAdd} />
          ) : (
            <Link to="/carrito">
              <button className="btn btn-outline-info m-4">
                Ir al carrito
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
