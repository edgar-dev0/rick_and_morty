import { useState, useEffect, useRef } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import Location from './components/Location'
import ResidentCard from './components/ResidentCard'

function App() {
  
  const [inputValue, setInputValue] = useState(getRandomNumber(126))

  const numberRandom = getRandomNumber(126)
  //const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const url = `https://rickandmortyapi.com/api/location/${inputValue || 'error'}`
  const [location, getLocation, hasError] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [inputValue])

  const inputSearch = useRef()
  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim())
  }

  console.log(location)  

  return (
    <div className='container__main'>
      <header className='container__header'>
        <form className='container__form' onSubmit={handleSubmit}>
          <input ref={inputSearch} type="text" />
          <button>Search</button>
        </form>
      </header>
      {
        hasError
        ? <h2>Hey! you must provide an id from 1 to 126</h2>
        : (
          <div className='container__body'>
            <Location 
              location = { location }
            />
    
            <div className='container__cards'>
              {
                location?.residents.map( url => (
                <ResidentCard
                  key = {url}
                  url = {url}
                />
                ))
              }
            </div>
          </div>
        )  
      }
    </div>
  
  )
}

export default App
