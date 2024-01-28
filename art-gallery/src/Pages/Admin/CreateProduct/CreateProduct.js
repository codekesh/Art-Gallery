import React, { useEffect, useState } from 'react'
import Footer from '../../../components/Footer/Footer'
import Copyright from '../../../components/Copyright/Copyright'
import AdminMenu from '../../../components/AdminMenu/AdminMenu'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios'
import toast from 'react-hot-toast'

const CreateProduct = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [artists, setArtists] = useState("");
    const [photo, setPhoto] = useState("");
    const [shipping, setShipping] = useState("");

    //get all category
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

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const productData = new FormData();
            productData.append("name", name);
            productData.append("description", description);
            productData.append("price", price);
            productData.append("quantity", quantity);
            productData.append("artists", artists);
            productData.append("photo", photo);
            productData.append("category", category);
            const { data } = axios.post(
                "/create-product",
                productData
            );
            if (data?.success) {
                toast.success("Product Created Successfully");
            } else {
                toast.error(data?.message);
                navigate('/Admin/Admindashboard/products')
            }
        } catch (error) {
            console.log(error);
            toast.error("something went wrong");
        }
    };

    return (
        <>
            <div className='adminDashboardHeader'>
                <AdminMenu />
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Category"
                            onChange={(event) => { setCategory(event.target.value) }}
                        >
                            {categories?.map((c) => (
                                <MenuItem key={c._id} value={c._id}>{c.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <div>
                    <label>
                        {photo ? photo.name : "Upload Photo"}
                        <input type="file" name="photo" accept='image/*' onChange={(e) => { setPhoto(e.target.files[0]) }} hidden />
                    </label>
                </div>
                <div>
                    {photo && (
                        <div>
                            <img src={URL.createObjectURL(photo)} alt="proDuct_photo" height={'200px'} />
                        </div>
                    )}
                </div>
                <div>
                    <input type="text" value={name} placeholder='write a name' className='form-control' onChange={(e) => setName(e.target.value)} />
                    <input type="text" value={description} placeholder='write a description' className='form-control' onChange={(e) => setDescription(e.target.value)} />
                    <input type="text" value={price} placeholder='write a price' className='form-control' onChange={(e) => setPrice(e.target.value)} />
                    <input type="text" value={quantity} placeholder='write a quantity' className='form-control' onChange={(e) => setQuantity(e.target.value)} />
                    <input type="text" value={artists} placeholder='write a artists' className='form-control' onChange={(e) => setArtists(e.target.value)} />
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Shipping</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={shipping}
                                label="Select Shipping"
                                onChange={(event) => { setShipping(event.target.value) }}
                            >
                                <MenuItem value="0">0</MenuItem>
                                <MenuItem value="1">1</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <div>
                        <button onClick={handleCreate}>
                            CREATE PRODUCT
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
            <Copyright />
        </>
    )
}

export default CreateProduct
