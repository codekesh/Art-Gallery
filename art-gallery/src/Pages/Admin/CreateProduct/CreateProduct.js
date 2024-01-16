import React from 'react'
import Footer from '../../../components/Footer/Footer'
import Copyright from '../../../components/Copyright/Copyright'
import AdminMenu from '../../../components/AdminMenu/AdminMenu'

const CreateProduct = () => {
    return (
        <>
            <div className='adminDashboardHeader'>
                <AdminMenu />
                <div>
                    Create Product
                </div>
            </div>
            <Footer />
            <Copyright />
        </>
    )
}

export default CreateProduct
