import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from "react-router-dom"

const AdminMenu = () => {
    return (
        <>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: '50px' }} className="box">
                <h2>Admin Panel</h2>
                <nav aria-label="main mailbox folders">
                    <List>
                        <NavLink to="/Admin/Admindashboard/create-category">
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Create Category" />
                                </ListItemButton>
                            </ListItem>
                        </NavLink>
                        <NavLink to="/Admin/Admindashboard/create-product">
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Create Products" />
                                </ListItemButton>
                            </ListItem>
                        </NavLink>
                        <NavLink to="/Admin/Admindashboard/products">
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Products" />
                                </ListItemButton>
                            </ListItem>
                        </NavLink>
                        <NavLink to="/Admin/Admindashboard/users">
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Users" />
                                </ListItemButton>
                            </ListItem>
                        </NavLink>
                    </List>
                </nav>
            </Box>
        </>
    )
}

export default AdminMenu
