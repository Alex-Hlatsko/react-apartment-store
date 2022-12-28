import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgCloseR } from 'react-icons/cg'
import './styles.css'

const Navigation = ({logo}) => {
  const [menuState, setMenuState] = useState(false);
  return (
    <>
      <nav className='flex justify-between items-center'>
        <div className=''>
          <Link to='/' className='flex items-center'>
            <img  className='mr-2' src={logo === undefined ?  './img/logo.svg' : logo} alt="logo"/>
            <span className='logo text-base'>Apartmentsell</span>
          </Link>
        </div>
        <div className='nav_items flex items-center'>
          <NavLink className='nav_item ml-6' to='/'>Home</NavLink>
          <NavLink className='nav_item ml-6' to='/apartments'>Apartments</NavLink>
          <NavLink className='nav_item ml-6' to='/about'>About</NavLink>
          <NavLink className='nav_item ml-6' to='/contact'>Contact</NavLink>
        </div>
        <div className="menu" onClick={()=>setMenuState((menuState)=>menuState=!menuState)}>
          {menuState ? <CgCloseR size={28}/> : <GiHamburgerMenu size={28}/>}  
        </div>
      </nav>

      {menuState && 
      <div className="mobile_menu">
        <div className="flex justify-between items-center">
          <div className=''>
            <Link className='flex items-center'>
              <img  className='mr-2' src="./img/logo.svg" alt="logo"/>
              <span className='logo text-base'>Apartmentsell</span>
            </Link>
          </div>
          <div className="menu" onClick={()=>setMenuState((menuState)=>menuState=!menuState)}>
            {menuState ? <CgCloseR size={28}/> : <GiHamburgerMenu size={28}/>}
          </div>
        </div>
        <div className='mobile_items flex flex-col items-center justify-center'>
          <NavLink className='nav_item text-2xl mt-8' to='/'>Home</NavLink>
          <NavLink className='nav_item text-2xl mt-8' to='/apartments'>Apartments</NavLink>
          <NavLink className='nav_item text-2xl mt-8' to='/about'>About</NavLink>
          <NavLink className='nav_item text-2xl mt-8' to='/contact'>Contact</NavLink>
        </div>
      </div>
      }
    </>
  )
}

export default Navigation