import React from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom"
import { Button } from '@mui/material'

const Navbar = () => {
    const logo = require('../../images/Homes/05dcad8c91c34402b5b4533eeb309c1e.png')
    return (
        <nav className="navbar sticky">
            <NavLink to="/">
                <img src={logo} alt="logo" />
            </NavLink>
            <div className="nav-title">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/Shop">Shops</NavLink>
                <NavLink className="nav-link" to="/Event">Events</NavLink>
                <NavLink className="nav-link" to="/News">News</NavLink>
                <NavLink className="nav-link" to="/About">About Us</NavLink>
                <NavLink to="/Login">
                    <Button variant="contained" style={{ color: '#D0006E', background: 'white', margin: '0px 3rem 0px 0px' }}>Log In</Button>
                </NavLink>
                <NavLink to="/Signup">
                    <Button variant="contained" style={{ color: '#D0006E', background: 'white' }}>Sign Up</Button>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar
