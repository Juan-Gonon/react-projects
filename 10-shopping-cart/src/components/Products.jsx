import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from './hooks/useCart'

// eslint-disable-next-line react/prop-types
export const Products = ({ products }) => {
  const { addToCart, cart, removeFromCart, checkProductInCart } = useCart()

  console.log(cart)

  return (
    <main className='products'>
      <ul>
        {
                // eslint-disable-next-line react/prop-types
                products.slice(0, 10).map((product) => {
                  const isProductInCart = checkProductInCart(product)

                  return (
                    <li key={product.id}>
                      <img src={product.thumbnail} alt={product.title} />
                      <div>
                        <strong>{product.title}</strong> - ${product.price}
                      </div>
                      <div>
                        <button
                          onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}
                          style={{
                            backgroundColor: isProductInCart ? 'red' : '#09f'
                          }}
                        >{
                          isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />
                          }
                        </button>
                      </div>
                    </li>
                  )
                })
            }
      </ul>
    </main>
  )
}
