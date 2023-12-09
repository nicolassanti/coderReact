import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import {getFirestore,doc,getDoc} from 'firebase/firestore';


function ItemDetailContainer() {

    const[producto,setProducto] = useState([])
    const {prodId} =useParams()
    const [loader,setLoader] = useState(true);

    useEffect(() => {

      const db = getFirestore()
      const product= doc(db,'productos',prodId) 

      getDoc(product)
        .then(doc => {
           const data=doc.data();
           const formattedData={id:prodId,...data} 
          setProducto(formattedData)
        })
        .catch(err=> console.log(err))
        .finally(()=>{setLoader(false)})

    }, [prodId])
    
  return (
    <>
     {loader ? (
        <div className="spinner-border text-success"></div>
      ) : (
    <ItemDetail className='d-flex flex-wrap' prod={producto}/>
      )}
    </>
  )
}

export default ItemDetailContainer