import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => (
  <nav className="nav">
    <NavLink to="/" className="nav__link">portfolio</NavLink>
    <NavLink to="/about" className="nav__link">about</NavLink>
  </nav>
)

export default Navigation