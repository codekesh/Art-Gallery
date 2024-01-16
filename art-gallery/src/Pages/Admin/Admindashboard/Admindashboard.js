import React from 'react'
import Footer from '../../../components/Footer/Footer'
import Copyright from '../../../components/Copyright/Copyright'
import AdminMenu from '../../../components/AdminMenu/AdminMenu'
import { useAuth } from '../../../context/AuthProvider'
import './Admindashboard.css'

const Admindashboard = () => {
  const [auth] = useAuth()
  return (
    <>
      <div className='adminDashboardHeader'>
        <AdminMenu />
        <div className='adminDetailsHeader'>
          <h2>Admin Name: {auth?.user?.name}</h2>
          <h2>Admin Email: {auth?.user?.email}</h2>
          <h2>Admin Contact: {auth?.user?.contact}</h2>
        </div>
      </div>
      <Footer />
      <Copyright />
    </>
  )
}

export default Admindashboard
