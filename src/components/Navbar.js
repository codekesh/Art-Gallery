import React from 'react'

const Navbar = () => {
    const logo = require('./images/05dcad8c91c34402b5b4533eeb309c1e.png')
    return (
        <nav class="navbar sticky">
            <img src={logo} alt="logo" />
            <div class="nav-title">
                <span>Shops</span>
                <span>Events</span>
                <span>Collections</span>
                <span>News</span>
                <span>Connect</span>
                <span>About Us</span>
                <button>Log in</button>
            </div>
        </nav>
    )
}

export default Navbar
