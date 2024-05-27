import { useContext } from 'react'
import { FilterContext } from '../../context/filters'
export function useFilters () {
  // const [filters, setFilters] = useState({
  //   category: 'all',
  //   minPrice: 0
  // })
  const { filters, setFilters } = useContext(FilterContext)

  const filterProducts = (products) => {
    return products.filter((product) => product.price >= filters.minPrice && (
      filters.category === 'all' || product.category === filters.category
    ))
  }

  return {
    filterProducts, setFilters, filters
  }
}
