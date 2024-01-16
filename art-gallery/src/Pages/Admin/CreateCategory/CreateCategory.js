import React from 'react'
import Footer from '../../../components/Footer/Footer'
import Copyright from '../../../components/Copyright/Copyright'
import AdminMenu from '../../../components/AdminMenu/AdminMenu'

const CreateCategory = () => {
  return (
    <>
      <div className='adminDashboardHeader'>
        <AdminMenu />
        <div>
          Create Category
        </div>
      </div>
      <Footer />
      <Copyright />
    </>
  )
}

export default CreateCategory
