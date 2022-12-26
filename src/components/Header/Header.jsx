import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header_bg"/>
        <div className="header_content flex flex-col justify-center">
              <h1 className="header_title">Find the perfect place for you</h1>
              <p className="header_subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem natus ullam obcaecati, voluptate cupiditate exercitationem perspiciatis distinctio earum!</p>
              <Link to="/apartmants"><span className='btn'>More</span></Link>
        </div>
    </div>
  )
}

export default Header