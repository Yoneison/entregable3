import './styles/LocationCard.css'
const LocationCard = ({location}) => {
  return (
    <article className='container__padre'>
        <h2 className='location__name'>{location?.name}</h2>
        <ul className='ul'>
            <li className='li'><span className='span'>Type:</span><span className='span__item'>{location?.type}</span></li>
            <li className='li'><span className='span'>Dimension:</span><span className='span__item'>{location?.dimension}</span></li>
            <li className='li'><span className='span'>Population:</span><span className='span__item'>{location?.residents.length}</span></li>
        </ul>
    </article>
  ) 
}

export default LocationCard