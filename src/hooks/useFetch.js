import { useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {

  const [infoApi, setInfoApi] = useState()
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const getApi = () =>  {
    axios
      .get(url)
      .then(response => {
        setInfoApi(response.data)
        setHasError(false)
      })
      .catch(err => {
        console.log(err)
        setHasError(true)
      })
      .finally(() => setIsLoading(false))
  }
  
  return [infoApi, getApi, hasError, isLoading]
}

export default useFetch