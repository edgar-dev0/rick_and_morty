import React from 'react'

const Location = ({ location }) => {
  return (
    <div className='location'>
      <h2>{ location?.name }</h2>
      <ul className='location_list'>
        <li className='location__item'><span className='location__item__label'>Type:</span> <span className='location__item__value'>{ location?.type }</span></li>
        <li className='location__item'><span className='location__item__label'>Dimension:</span> <span className='location__item__value'>{ location?.dimension }</span></li>
        <li className='location__item'><span className='location__item__label'>Population:</span> <span className='location__item__value'>{ location?.residents.length }</span></li>
      </ul>
    </div>
  )
}

export default Location
