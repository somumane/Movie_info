import React from 'react'
import './Navbar.css';
import { NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
    <h2>Movies-Info</h2>
      <div className='Links'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/upcoming">UpComing</NavLink>
      <NavLink to="/bollywoodold">BollyWood-<span>OLD</span></NavLink>
      <NavLink to="/hollywoodold">HollyWood-<span>OLD</span></NavLink>
      </div>
    </div>
  )
}

export default Navbar
