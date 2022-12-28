import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Apartment = ({data}) => {
  return (
    <>
    <Link to={`/apartment/${data.id}`}>
    <div className='apartment'>
      <div className="apartment_img" style={{backgroundImage: `url(${data.images[0]})`}}/>
      <div className="apartment_content">
        <h1 className="apartment_title text-center mt-1 font-semibold">{data.title}</h1>
        <div className="apartment_details flex justify-between items-center">
          <p className="apartment_subtitle">Rooms: {data.num_rooms}</p>
          <p className="apartment_subtitle">Area: {data.area} m2</p>
        </div>
      </div>
    </div>
    
    </ Link>
    </>
  )
}

export default Apartment