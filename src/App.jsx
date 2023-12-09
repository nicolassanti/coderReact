import React,{useState,useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Error404 from "./components/Error/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/cartContext";
import Checkout from "./components/Checkout/Checkout";
//import {getFirestore,collection,getDocs} from 'firebase/firestore';



function App() {

/* const[productos,setProductos]=useState(null)

useEffect(() => {
  //instancion bbdd firestore
  const db=getFirestore();
  //creo una instancia de la colleccion que quiero buscar en la bbdd y le paso la instancia anterior de la bbdd y el nombre de la coleccion (como la llamé en firestore)
  const dbColection=collection(db,'productos')

  //llamo al metodo para obtener los documentos de la coleccion
  getDocs(dbColection)
    .then((snapshot)=>{
    
      //seteo el useState creado con los productos que recibo usando el metodo docs de firebase.

      setProductos(snapshot.docs.map((docIndividual)=>{

        return {id:docIndividual.id, ...docIndividual.data()}
      }))


    })

}, []),

console.log(productos); */

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:prodId" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
