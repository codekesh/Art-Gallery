import React from 'react'
import { Button } from '@mui/material'
import './Footer.css'

const Footer = () => {
    const logo=require('../../images/Homes/logo1.png')
    return (
        <footer>
            <div className="left-side">
                <img src={logo} alt="" />
                <div className="footer-links">
                    <div className="Explore">
                        <h3>Explore</h3>
                        <p>Events</p>
                        <p>Blogs</p>
                        <p>Shops</p>
                        <p>Exhibitions</p>
                        <p>Collections</p>
                        <p>Learn</p>
                    </div>
                    <div className="About Us">
                        <h3>About Us</h3>
                        <p>People</p>
                        <p>Press</p>
                        <p>Join us</p>
                        <p>Social Media</p>
                        <p>Contact us</p>
                        <p>FAQs</p>
                    </div>
                    <div className="Support Us">
                        <h3>Support Us</h3>
                        <p>Donations</p>
                        <p>Sponsor us</p>
                    </div>
                </div>
            </div>

            <div className="right-side">
                <form action="get" className="form">
                    <h2>Subscribe to us to know about events, exhibitions and news</h2>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email ID" />
                    <Button variant="contained" style={{ color: 'white', background: '#D0006E', width: '150px', borderRadius: '20px' }}>Subscribe</Button>
                </form>
                <div className="icons">
                    <i className="fa-brands fa-lg fa-twitter"></i>
                    <i className="fa-brands fa-lg fa-facebook-f"></i>
                    <i className="fa-brands fa-lg fa-instagram"></i>
                    <i className="fa-brands fa-lg fa-linkedin-in"></i>
                    <i className="fa-brands fa-lg fa-pinterest"></i>
                </div>
            </div>
        </footer>
    )
}

export default Footer
