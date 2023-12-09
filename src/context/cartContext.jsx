import React, {useState , createContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart,setCart] = useState([])
    const [totalItems,setTotalItems] = useState(0)
    const [totalPrice,setTotalPrice] = useState(0)
    
    const addToCart = (item) =>{
      if (!isInCart(item.prod.id)) {
        setCart((prev)=>[...prev,item])
        setTotalItems(prev=>prev+item.cantidad)
        setTotalPrice(prev=>prev+(item.cantidad*item.prod.price))
      } else {
    let cartUpdated =cart.map((i)=>{
       if (i.prod.id===item.prod.id) {
        return {...i,cantidad:item.cantidad+i.cantidad};     
       } else{
        return {...i}
       }
      })
      setCart(cartUpdated);
      setTotalItems(prev=>prev+item.cantidad)
      setTotalPrice(prev=>prev+(item.cantidad*item.prod.price))
      }
    } 

    const isInCart=(itemId)=>{
      return cart.some((e) => {
        return e.prod.id==itemId
      });
    }

/*     const getTotalItemsPrice = (cart) =>{
    } */

    const removeItem = (item) =>{
      let cartFiltrado= cart.filter((i) => i.prod.id!==item.prod.id);
      setCart(cartFiltrado)
      setTotalItems(prev=>prev-item.cantidad)
      setTotalPrice(prev=>prev-(item.cantidad*item.prod.price))
    }

    const removeItems = () =>{
      setCart([])
      setTotalItems(0)
      setTotalPrice(0)
    }

    const cantParcial = (item) =>{
      return item.prod.price * item.cantidad
    }

  return (
    <CartContext.Provider value={{
                                cart,
                                totalItems,
                                totalPrice,
                                setCart,
                                addToCart,
                                cantParcial,
                                removeItems,
                                //getTotalItemsPrice,
                                removeItem
                                }}>
        {children}
    </CartContext.Provider>
  )
}
