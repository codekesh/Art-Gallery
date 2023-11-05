import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Copyright from '../../components/Copyright/Copyright'
import "./Login.css"
import { TextField, Button, Grid, Typography, Container } from '@mui/material';

const Login = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Container component="main" maxWidth="xs" className='signUp'>
                <Typography variant="h5" align="center" style={{ marginBottom: "10px" }}>Registration</Typography>
                <Typography variant="h6" align="center" style={{ lineHeight: "1.2", marginBottom: "12px" }}>Wanna Join Artsverse! Then, create your Username</Typography>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {/* username */}
                        <Grid item xs={12} sm={12}>
                            <TextField
                                label="Username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>

                        {/* Password */}
                        <Grid item xs={12} sm={12}>
                            <TextField
                                label="Password"
                                name="password"
                                type='password'
                                value={formData.password}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" fullWidth variant="contained" color="primary">Login</Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
            <Footer />
            <Copyright />
        </>
    )
}

export default Login
