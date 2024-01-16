import './components/styles/AppFooter.css'
import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationCard from './components/LocationCard'
import ResidentCard from './components/ResidentCard'
import header from './assets/img/banner.png'

function App() {
   const locationid = getRandomNumber(126)
   const [inputValue, setInputValue] = useState(locationid)  
   const url = `https://rickandmortyapi.com/api/location/${inputValue}`
   const [ location, getLocation, hasError ]= useFetch(url)
                       

   useEffect(()=> {
    getLocation()
   }, [inputValue])

  const inputLocation = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputLocation.current.value)
  }

  return (
    <div>
      <header className='header__app'>
        <img className='header__banner' src={header} alt="" />
      </header>
      <div className='search'>
        <form onSubmit={handleSubmit}>
        <input className='input__btn' ref={inputLocation} type="text" />
        <button className='btn'>Search</button>
      </form>
      </div>
      
      {
        hasError
         ? <h2 className='hasError__mensaje'>❌Hey! you must provide an id from 1 to 126🥲</h2>
         : (
          <> 
            <LocationCard
             location ={location}
           />
          <div className='resident__container'>
          {
            location?.residents.map( url=> (
            <ResidentCard
             key={url}
             url={url}
            />
          ))
        }
        
      </div>
       <div className='footer'>
          <footer>
            <hr className='hr'/>
             <p className='name'>Hecho con ❤️ Yoneison Bayona</p>
          </footer>
        </div>
      </>
     
    )
} </div>
    

  )
}

export default App
