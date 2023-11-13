import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Copyright from '../../components/Copyright/Copyright'
import './Shop.css'
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const imgBook = require("../../images/Products/Books/A Wizard of Earthsea.jpeg");
const Shop = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('/books')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <Grid container>
                {books.map(book => (
                    <Grid item xs={12} sm={3}>
                        <Card sx={{
                            maxWidth: 280,
                            margin: "10% 0% 10% 5%",
                            borderRadius: '15px',
                            '&:hover': {
                                boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
                            },
                        }}>
                            <NavLink to='/Productpage'>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={imgBook}
                                    alt="Paella dish"
                                    style={{}}
                                />
                            </NavLink>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Book
                                </Typography>
                                <Typography variant="h5" color="text.secondary">
                                    {book.name}
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                    ${book.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Footer />
            <Copyright />
        </>
    );
}

export default Shop
