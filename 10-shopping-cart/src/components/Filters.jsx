import { useId } from 'react'
import './Filters.css'
import { useFilters } from './hooks/useFilters'

// eslint-disable-next-line react/prop-types
export const Filters = () => {
  // const [minPrice, setMinPrice] = useState(0) // estado local
  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  const { setFilters, filters } = useFilters()

  const handleChangeMinPrice = (e) => {
    // // Dos fuentes de la verdad
    // setMinPrice(e.target.value)
    setFilters((prevState) => ({ ...prevState, minPrice: e.target.value }))
  }

  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({ ...prevState, category: e.target.value }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de</label>
        <input type='range' id={minPriceFilterId} min={0} max={1000} onChange={handleChangeMinPrice} value={filters.minPrice} />
        <span>{filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptop'>Portátiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}
