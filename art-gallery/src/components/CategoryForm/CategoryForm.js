import React from 'react';
import { TextField, Button, Grid, Container } from '@mui/material';
import { ToastContainer } from 'react-toastify';

const CategoryForm = ({ handleSubmit, category, setCategory }) => {
    return (
        <>
            <Container component="main" maxWidth="xs" className='signUp'>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                label="Enter new category"
                                name="text"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" fullWidth variant="contained" color="primary">
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
            <ToastContainer />
        </>
    );
};

export default CategoryForm;
