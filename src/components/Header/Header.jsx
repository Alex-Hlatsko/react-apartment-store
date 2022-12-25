import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className="header_bg">
            <img src="./img/home.jpg" alt="header_bg"/>
        </div>
        <div className="header_content">
            <h1 className="header_title"></h1>
            <p className="header_subtitle"></p>
        </div>
    </div>
  )
}

export default Header