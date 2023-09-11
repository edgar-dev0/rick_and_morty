import React from 'react'

const Location = ({ location }) => {
  return (
    <div>
      <h1>Componente</h1>
      <h2>{ location?.name }</h2>
      <ul>
        <li>Type: { location?.type }</li>
        <li>Dimension: { location?.dimension }</li>
        <li>Population: { location?.residents.length }</li>
      </ul>
    </div>
  )
}

export default Location
