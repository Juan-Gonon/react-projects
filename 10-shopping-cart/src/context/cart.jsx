import { createContext, useReducer } from 'react'
import { reducer, initialState } from '../reducer/cart'
export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (product) => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = (product) => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return {
    state,
    addToCart,
    removeFromCart,
    clearCart
  }
}

// eslint-disable-next-line react/prop-types
export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()
  // const [s, setCart] = useState([])

  // const addToCart = product => {
  //   // setCart([...cart, product])
  //   const productInCart = cart.findIndex(item => item.id === product.id)

  //   if (productInCart >= 0) {
  //     const newCart = structuredClone(cart)
  //     newCart[productInCart].quantity += 1
  //     return setCart(newCart)
  //   }

  //   setCart((prevState) => (
  //     [
  //       ...prevState,
  //       {
  //         ...product,
  //         quantity: 1
  //       }
  //     ]
  //   ))
  // }

  // const removeFromCart = (product) => {
  //   setCart((prevState) => prevState.filter((item) => item.id !== product.id))
  // }

  // const clearCart = () => {
  //   setCart([])
  // }

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      clearCart,
      removeFromCart
    }}
    >
      {
            children
        }
    </CartContext.Provider>
  )
}
