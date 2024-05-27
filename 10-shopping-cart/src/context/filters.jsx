import { createContext, useState } from 'react'

// Este es el que tenemos que consumir
// 1. Crear el contento
export const FilterContext = createContext()

// Este es el que provee de acceso al contexto
// 2. Crear el provider, para proveer el contexto

// eslint-disable-next-line react/prop-types
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 250
  })
  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
