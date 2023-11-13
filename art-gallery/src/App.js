import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'
import Event from './Pages/Event/Event'
import News from './Pages/News/News'
import About from './Pages/About/About'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/SIgnup.js'
import 'react-toastify/dist/ReactToastify.css';
import Private from './components/Routes/Private/Private.js'
import Userdashboard from './Pages/Dashboard/Userdashboard.js'
import Forgot from './Pages/Forgot/Forgot.js'
import Productpage from './Pages/Productpage/Productpage.js'
import AdminRoute from './components/Routes/Private/AdminRoute.js'
import Admindashboard from './Pages/Admindashboard/Admindashboard.js'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Userdashboard" element={<Private />}>
          <Route path="/Userdashboard" element={<Userdashboard />}></Route>
        </Route>
        <Route path="/Admindashboard" element={<AdminRoute />}>
          <Route path="/Admindashboard" element={<Admindashboard />}></Route>
        </Route>
        <Route path="/Shop" element={<Shop />}></Route>
        <Route path="/Forgot" element={<Forgot />}></Route>
        <Route path="/Productpage" element={<Productpage />}></Route>
        <Route path="/Event" element={<Event />}></Route>
        <Route path="/News" element={<News />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
      </Routes>
    </>
  )
}
export default App
