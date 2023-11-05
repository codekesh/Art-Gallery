import React from 'react'
import Footer from '../../components/Footer/Footer'
import Copyright from '../../components/Copyright/Copyright'
import './Shop.css'
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

const img = require("../../images/Products/Books/A Wizard of Earthsea.jpeg");
const Shop = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={12} sm={3}>
                    <Card sx={{
                        maxWidth: 280,
                        margin: "10% 0% 10% 5%",
                        borderRadius: '15px',
                        '&:hover': {
                            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
                        },
                    }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image={img}
                            alt="Paella dish"
                            style={{}}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Book
                            </Typography>
                            <Typography variant="h5" color="text.secondary">
                                A Wizard of Earthsea
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                $30
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Card sx={{
                        maxWidth: 280,
                        margin: "10% 0% 10% 5%",
                        borderRadius: '15px',
                        '&:hover': {
                            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
                        },
                    }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image={img}
                            alt="Paella dish"
                            style={{}}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Book
                            </Typography>
                            <Typography variant="h5" color="text.secondary">
                                A Wizard of Earthsea
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                $30
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Card sx={{
                        maxWidth: 280,
                        margin: "10% 0% 10% 5%",
                        borderRadius: '15px',
                        '&:hover': {
                            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
                        },
                    }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image={img}
                            alt="Paella dish"
                            style={{}}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Book
                            </Typography>
                            <Typography variant="h5" color="text.secondary">
                                A Wizard of Earthsea
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                $30
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Card sx={{
                        maxWidth: 280,
                        margin: "10% 0% 10% 5%",
                        borderRadius: '15px',
                        '&:hover': {
                            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
                        },
                    }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image={img}
                            alt="Paella dish"
                            style={{}}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Book
                            </Typography>
                            <Typography variant="h5" color="text.secondary">
                                A Wizard of Earthsea
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                $30
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Card sx={{
                        maxWidth: 280,
                        margin: "10% 0% 10% 5%",
                        borderRadius: '15px',
                        '&:hover': {
                            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
                        },
                    }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image={img}
                            alt="Paella dish"
                            style={{}}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Book
                            </Typography>
                            <Typography variant="h5" color="text.secondary">
                                A Wizard of Earthsea
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                $30
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Card sx={{
                        maxWidth: 280,
                        margin: "10% 0% 10% 5%",
                        borderRadius: '15px',
                        '&:hover': {
                            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
                        },
                    }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image={img}
                            alt="Paella dish"
                            style={{}}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Book
                            </Typography>
                            <Typography variant="h5" color="text.secondary">
                                A Wizard of Earthsea
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                $30
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Footer />
            <Copyright />
        </>
    );
}

export default Shop
