import React from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom"
import { Button } from '@mui/material'
import { useAuth } from '../../context/AuthProvider'
import SearchBar from '../SearchBar/SearchBar'

const Navbar = () => {
    const [auth, setAuth] = useAuth();
    const logo = require('../../images/Homes/logo1.png')
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: '',
        })
        localStorage.removeItem("auth")
    }

    return (
        <nav className="navbar">
            <NavLink to="/">
                <img src={logo} alt="logo" />
            </NavLink>
            <SearchBar />
            <div className="nav-title">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/Shop">Shops</NavLink>
                <NavLink className="nav-link" to="/Event">Events</NavLink>
                <NavLink className="nav-link" to="/News">News</NavLink>
                <NavLink className="nav-link" to="/About">About Us</NavLink>
                {
                    !auth.user ?
                        (<>
                            <NavLink to="/Login">
                                <Button variant="contained" style={{ color: '#D0006E', background: 'white', margin: '0px 3rem 0px 0px' }}>Log In</Button>
                            </NavLink>
                            <NavLink to="/Signup">
                                <Button variant="contained" style={{ color: '#D0006E', background: 'white' }}>Sign Up</Button>
                            </NavLink>
                        </>)
                        :
                        (<>
                            <NavLink className="nav-link" to={`${auth?.user?.role === 1 ? '/Admin/Admindashboard' : '/User/Userdashboard'}`}>Dashboard</NavLink>
                            <NavLink onClick={handleLogout} to="/Login">
                                <Button variant="contained" style={{ color: '#D0006E', background: 'white', margin: '0px 3rem 0px 0px' }}>Log Out</Button>
                            </NavLink>
                        </>)
                }
            </div>
        </nav>
    )
}

export default Navbar
