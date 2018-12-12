import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => (
  <nav className="nav">
    <NavLink to="/portfolio" className="nav__link" activeClassName="is-active">portfolio</NavLink>
  </nav>
)

export default Navigation