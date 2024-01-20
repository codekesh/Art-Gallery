import React, { useEffect, useState } from 'react'
import Footer from '../../../components/Footer/Footer'
import Copyright from '../../../components/Copyright/Copyright'
import AdminMenu from '../../../components/AdminMenu/AdminMenu'
import toast from 'react-hot-toast'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios'
import { Button } from '@mui/material'

const CreateCategory = () => {
  const [categories, setCategories] = useState([])

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get('http://localhost:8080/category')
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong in getting category')
    }
  }

  useEffect(() => {
    getAllCategory();
  })

  return (
    <>
      <div className='adminDashboardHeader'>
        <AdminMenu />
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {categories.map((c) => (
            <ListItem
              key={c._id}
              disableGutters
              secondaryAction={
                <Button variant="contained">Edit</Button>
              }
            >
              <ListItemText primary={c.name} />
            </ListItem>
          ))}
        </List>
      </div>
      <Footer />
      <Copyright />
    </>
  )
}

export default CreateCategory
