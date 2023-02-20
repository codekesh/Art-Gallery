import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Shops from './Shops'
import Donation from './Donation'
import Footer from './Footer'
import Copyright from './Copyright'
import Sponsors from './Sponsors'
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Shops />
      <Sponsors/>
      {/* <Donation /> */}
      <Footer />
      <Copyright />
    </div>
  )
}

export default App
