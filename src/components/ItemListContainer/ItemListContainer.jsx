import { useState, useEffect } from "react";
import Item from "../Item/Item";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";
import {getFirestore,collection,getDocs,query,where} from 'firebase/firestore';



function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();
  const [loader,setLoader] = useState(true);

  useEffect(() => {
    const db=getFirestore();
    const prodDb = categoryId 
    ? query(collection(db,'productos'),where('category','==',categoryId))
    : collection(db,'productos')


   getDocs(prodDb)
      .then((snapshot)=>{    
        const prodDevueltos = snapshot.docs.map((docIndividual)=>{
            return {id:docIndividual.id, ...docIndividual.data()}
          })
          setProductos(prodDevueltos)
        })
      .catch((err) => {console.log(err)})
      .finally(()=>{setLoader(false)})

},[categoryId])


  return (
    <div className="d-flex flex-row flex-wrap justify-content-around">
      {loader ? (
        <div className="spinner-border text-success"></div>
      ) : (
        productos.map((product) => {
          return <Item key={product.id} prod={product} />;
        })
      )}
    </div>
  );
}

export default ItemListContainer;
