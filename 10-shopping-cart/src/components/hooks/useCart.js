import { useContext } from 'react'
import { CartContext } from '../../context/cart'

export const useCart = () => {
  const { cart, addToCart, clearCart, removeFromCart } = useContext(CartContext)

  // if (context === undefined) {
  //   throw new Error('useCart must be used within a CartProvider')
  // }

  const checkProductInCart = (product) => {
    return cart?.some((item) => item.id === product.id)
  }

  return {
    cart,
    addToCart,
    clearCart,
    removeFromCart,
    checkProductInCart
  }
}
