import React, { useState } from 'react';
import './Signup.css'
import Footer from '../../components/Footer/Footer'
import Copyright from '../../components/Copyright/Copyright'
import { TextField, Button, FormControlLabel, Grid, Typography, Container, FormControl, Radio, FormLabel, RadioGroup } from '@mui/material';

const Signup = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    number: '',
    Address: '',
    username: '',
    newpass: '',
    cofipass: '',
    receiveEmails: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Container component="main" maxWidth="xs" className='signUp'>
        <Typography variant="h5" align="center" style={{ marginBottom: "10px" }}>Registration</Typography>
        <Typography variant="h6" align="center" style={{ lineHeight: "1.2", marginBottom: "12px" }}>Wanna Join Artsverse! Then, create your Account</Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Name */}
            <Grid item xs={12} sm={12}>
              <TextField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            {/* DOB */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Date of Birth"
                name="dateOfBirth"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={formData.dateOfBirth}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            {/* gender */}
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  row
                >
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </Grid>

            {/* contact */}
            <Grid item xs={12} sm={12}>
              <TextField
                label="Contact"
                name="number"
                value={formData.number}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            {/* email */}
            <Grid item xs={12} sm={12}>
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            {/* address */}
            <Grid item xs={12}>
              <TextField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

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

            {/* newpassword */}
            <Grid item xs={12} sm={12}>
              <TextField
                label="New Password"
                name="newpass"
                type='password'
                value={formData.newpass}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            {/* confirm password */}
            <Grid item xs={12} sm={12}>
              <TextField
                label="Confirm Password"
                name="cofipass"
                type='password'
                value={formData.cofipass}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" fullWidth variant="contained" color="primary">Sign up</Button>
            </Grid>
          </Grid>
        </form>
      </Container>
      <Footer />
      <Copyright />
    </>
  );
};

export default Signup;
