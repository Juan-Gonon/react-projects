import React from 'react'

// eslint-disable-next-line react/prop-types
export const SearchPage = ({ routeParams }) => {
  return (
    // eslint-disable-next-line react/prop-types
    <h1>Has buscado {routeParams.query}</h1>
  )
}
