import React, {useState , createContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart,setCart] = useState([])
    
    const addToCart = (item) =>{
      if (!isInCart(item.prod.id)) {
        console.log(item);
        setCart((prev)=>[...prev,item])
      } else {
        console.log(item);
        console.log("producto ya esta");
      /*  let itemActual= cart.filter((i)=>{
          i.id==prod.id
        })
        console.log("itemActual: " + itemActual);
        console.log("cantActual: " + itemActual.cantidad);
        console.log("cantAgregada",prod.cant);
        itemActual.cantidad+=prod.cantidad */
      }

    } 

    const isInCart=(itemId)=>{
      return cart.some((e) => {
        return e.prod.id==itemId
      });
    }

    const getTotalItems = (cart) =>{
      let total=0
      cart.forEach(item => {
        total += item.cantidad
      });
      return total
    }
    const removeItems = () =>{

    }
  return (
    <CartContext.Provider value={{
                                cart,
                                setCart,
                                addToCart,
                                isInCart,
                                getTotalItems,
                                removeItems
                                }}>
        {children}
    </CartContext.Provider>
  )
}
