import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {

    const [respons, setRespons] = useState()
    const [hasError, setHasError] = useState(false)

    const getApi = () =>{
        axios.get(url)
        .then(res => {
            setRespons(res.data)
            setHasError(false)
        })
        .catch(err => {
            console.log (err)
            setHasError(true)
        })
        
    }

    return [respons, getApi, hasError]
 
  
}

export default useFetch