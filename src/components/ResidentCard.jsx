import React from 'react'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'

const ResidentCard = ({ url }) => {
  
  const [resident, getResident, hasError] = useFetch(url)

  useEffect(() => {
    getResident()
  }, [])

  console.log(resident)

  return (
    <article className='resident'>
      <header className='residet__header'>
        <img className='resident__image' src={ resident?.image } alt="image" />
        <div className='resident__status'>
          <span className={`resident__status__circle ${resident?.status}`}></span>
          <span className='resident__status__value'>Status: { resident?.status } </span>
        </div>
      </header>
      <section className='resident_body'>
        <h3 className='resident__name'>Name: { resident?.name }</h3>
        <hr className='resident__separator'/>
        <ul className='resident__list'>
          <li className='resident__item'><span className='resident__label'></span>spanSpecie: { resident?.species }<span className='resident__value'></span></li>
          <li className='resident__item'><span className='resident__label'></span>Origin: { resident?.origin.name }<span className='resident__value'></span></li>
          <li className='resident__item'><span className='resident__label'></span>Type: { resident?.type || 'unknow' }<span className='resident__value'></span></li>
          <li className='resident__item'><span className='resident__label'></span>Episodes where appear: { resident?.episode.length }<span className='resident__value'></span></li>
        </ul>

      </section>
    </article>
  )
}

export default ResidentCard
