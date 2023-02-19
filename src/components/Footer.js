import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div class="left-side">
                <img src="/images/05dcad8c91c34402b5b4533eeb309c1e.png" alt="" />
                <div class="footer-links">
                    <div class="Explore">
                        <h3>Explore</h3>
                        <p>Events</p>
                        <p>Blogs</p>
                        <p>Shops</p>
                        <p>Exhibitions</p>
                        <p>Collections</p>
                        <p>Learn</p>
                    </div>
                    <div class="About Us">
                        <h3>About Us</h3>
                        <p>People</p>
                        <p>Press</p>
                        <p>Join us</p>
                        <p>Social Media</p>
                        <p>Contact us</p>
                        <p>FAQs</p>
                    </div>
                    <div class="Support Us">
                        <h3>Support Us</h3>
                        <p>Donations</p>
                        <p>Sponsor us</p>
                    </div>
                </div>
            </div>

            <div class="right-side">
                <form action="get" class="form">
                    <h2>Subscribe to us to know about events, exhibitions and news</h2>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email ID" />
                    <button type="submit">Subscribe</button>
                </form>
                <div class="icons">
                    <i class="fa-brands fa-lg fa-twitter"></i>
                    <i class="fa-brands fa-lg fa-facebook-f"></i>
                    <i class="fa-brands fa-lg fa-instagram"></i>
                    <i class="fa-brands fa-lg fa-linkedin-in"></i>
                    <i class="fa-brands fa-lg fa-pinterest"></i>
                </div>
            </div>
        </footer>
    )
}

export default Footer
