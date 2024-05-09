import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button, Box, Link } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static" style={{backgroundColor:'gray'}}>
                <Toolbar style={{width:"100vw",display:'flex',justifyContent:"space-between"}}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link href="/Home" color="inherit" underline="none">
                            SkilHub
                        </Link>
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button color="inherit">
                            <Link href="/Home" color="inherit" underline="none">
                                Home
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link href="/about-us" color="inherit" underline="none">
                                About Us
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link href="/contact" color="inherit" underline="none">
                                Contact
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link className='btn btn-info' href="/Home/login/student" color="inherit" underline="none">
                                Login as Student
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link className=' btn btn-danger' href="/Home/login/instractor" color="inherit" underline="none">
                                Login as Instructor
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link className='btn btn-info' href="/Home/signup/Student" color="inherit" underline="none">
                                Sign Up As Student
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link className='btn btn-danger' href="/Home/signup/Instractor" color="inherit" underline="none">
                                Sign Up As Instructor
                            </Link>
                        </Button>
                    </Box>
                </Toolbar>
        </AppBar>
    );
}

export default Header;