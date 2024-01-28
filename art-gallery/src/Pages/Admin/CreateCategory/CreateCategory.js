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
import CategoryForm from '../../../components/CategoryForm/CategoryForm'
import Modal from 'antd/es/modal/Modal'

const CreateCategory = () => {
  const [categories, setCategories] = useState([])
  const [name, setName] = useState('')
  const [visible, setVisible] = useState('false')
  const [selected, setSelected] = useState('null')
  const [updatedName, setUpdatedName] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post('/create-category', { name })
      if (data?.success) {
        toast.success(`${data.name} is created`)
        getAllCategory()
      }
      else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error('Something went wrong')
    }
  }

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get('http://localhost:8080/category')
      if (data) {
        setCategories(data);
      }
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong in getting category')
    }
  }

  useEffect(() => {
    getAllCategory();
  }, [])

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.put(`/update-category/${selected._id}`, { name: updatedName })
      if (data.success) {
        toast.success(`${updatedName} is updated`)
        setSelected(null)
        setVisible(false)
        setUpdatedName("")
        getAllCategory()
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('Something went wrong')
    }
  }

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `/delete-category/${id}`
      );
      if (data.success) {
        toast.success(`category is deleted`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div className='adminDashboardHeader'>
        <AdminMenu />
        <CategoryForm handleSubmit={handleSubmit} category={name} setCategory={setName} />
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {categories?.map((c) => (
            <ListItem
              key={c._id}
              disableGutters
              secondaryAction={
                <>
                  <Button variant="contained" onClick={() => { setVisible(true); setUpdatedName(c.name); setSelected(c) }}>Edit</Button>
                  <Button variant="contained" onClick={() => { handleDelete(c._id) }}>Delete</Button>
                </>
              }
            >
              <ListItemText primary={c.name} />
            </ListItem>
          ))}
        </List>
        <Modal onCancel={() => setVisible(false)} footer={null} open={visible}>
          <CategoryForm category={updatedName} setCategory={setUpdatedName} handleSubmit={handleUpdate} />
        </Modal>
      </div>
      <Footer />
      <Copyright />
    </>
  )
}

export default CreateCategory
