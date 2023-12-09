import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";

function Checkout() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mail, setMail] = useState("");
  const [mailConfirm, setMailConfirm] = useState("");
  const [error, setError] = useState("");
  const [ordenCompra, setOrdenCompra] = useState("");
  const [validated, setValidated] = useState(false);
  const [loader,setLoader] = useState(false);

  const { cart, totalItems, totalPrice, removeItems } = useContext(CartContext);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (cart.length == 0) {
      setError("Tu carrito esta vacío!");
      setValidated(false);
      return;
    }
    if (!nombre || !apellido || !telefono || !mail) {
      setError("Complete todos los campos");
      setValidated(false);
      return;
    }
    if (mailConfirm != mail) {
      setError("Los correos no coinciden");
      setValidated(false);
      return;
    }
    if (nombre.length < 5 || nombre.length > 20) {
      setError("Ingrese un nombre valido");
      setValidated(false);
      return;
    }
    if (apellido.length < 5 || apellido.length > 20) {
      setError("Ingrese un apellido valido");
      setValidated(false);
      return;
    }
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } 
    setValidated(true);
    setError("");

    const db = getFirestore();
    const oc = {
      items: cart.map((item) => {
        return {
          id: item.prod.id,
          nombre: item.prod.title,
          precio: item.prod.price,
          cantidad: item.cantidad,
        };
      }),
      comprador: {
        name: nombre,
        apellido: apellido,
        telefono: telefono,
        mailto: mail,
      },
      total: totalPrice,
      fecha: new Date(),
    };
    setLoader(true)
     Promise.all(
       oc.items.map(async (item) => {
        const prodRef = doc(db, "productos", item.id);
        const prodDoc = await getDoc(prodRef);
        const stockActual = prodDoc.data().qty;
        await updateDoc(prodRef,{qty:stockActual-item.cantidad})
      })
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), oc)
        .then((referencia) => {
            console.log("llegue aca",referencia.id);
            setOrdenCompra(referencia.id);
            removeItems()
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err))
      .finally(()=>{setLoader(false)})
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex flex-column justify-content-center align-content-center mt-4">
        <ul>
          {cart.length == 0 ? (
            <div>No hay productos en el carrito</div>
          ) : (
            cart.map((cartItem) => {
              return (
                <li key={cartItem.prod.id}>
                  <span>
                    <strong>{cartItem.prod.title}</strong>
                  </span>
                  .
                  <span>
                    {" "}
                    Cantidad: <strong> {cartItem.cantidad}</strong>{" "}
                  </span>
                  .
                  <span>
                    {" "}
                    Precio Unitario:<strong>{cartItem.prod.price}</strong>{" "}
                  </span>
                  .
                </li>
              );
            })
          )}
        </ul>
      </div>

      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center align-content-center mt-4 w-75"
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              minLength={5}
              maxLength={20}
              type="text"
              placeholder="Nombre"
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            />
            <Form.Control.Feedback>Asi se hace!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              minLength={5}
              maxLength={20}
              type="text"
              placeholder="Apellido"
              onChange={(e) => {
                setApellido(e.target.value);
              }}
            />
            <Form.Control.Feedback>Asi se hace!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validTelefono">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="number"
              placeholder="Telefono"
              min={1000000000}
              max={999999999999}
              required
              onChange={(e) => {
                setTelefono(e.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Ingrese un teléfono válido
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validCorreo">
            <Form.Label>Correo Electrónico</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="email"
                minLength={11}
                placeholder="Correo Electrónico"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(e) => {
                  setMail(e.target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Ingrese un correo válido.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validCorreo">
            <Form.Label>Confirmacion Correo</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="email"
                minLength={11}
                placeholder="Correo Electrónico"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(e) => {
                  setMailConfirm(e.target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Ingrese un correo válido.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

      {
        loader?
        <>
        <Button className=" align-self-center w-25">
          Procesando la compra!
        </Button>
        <div className=" mt-4 spinner-border text-success"></div>
        </>
        :
        <Button type="submit" className=" align-self-center w-25">
          Generar Compra
        </Button>
      } 


      </Form>
      {error ? (
        <Alert className="m-4" variant="danger">
          {error}
        </Alert>
      ) : (
        ""
      )}
      {
        ordenCompra&&
        <Alert className="m-4" variant="success">
        Gracias por tu compra!
        Nro OC:  {ordenCompra}
        </Alert>
      }
    </div>
  );
}

export default Checkout;
