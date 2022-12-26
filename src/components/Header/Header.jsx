import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Header = ({data}) => {
  return (
    <div className='header'>
        <div className="header_bg" style={{backgroundImage: `url(${data.bg_img})`}}/>
        <div className="header_content flex flex-col justify-center">
              <h1 className="header_title">{data.title}</h1>
              <p className="header_subtitle">{data.subtitle}</p>
              <Link to="/apartmants"><span className='btn'>{data.btn}</span></Link>
        </div>
    </div>
  )
}

export default Header