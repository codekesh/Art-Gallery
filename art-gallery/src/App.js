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

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Shop" element={<Shop />}></Route>
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
