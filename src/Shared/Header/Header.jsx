import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
    const { user, logOutUser } = useContext(AuthContext)
    // console.log(user)
    const handleLogOut = () => {
        logOutUser()
            .then(res => { })
            .catch(err => { })
    }

    return (
        <div>
            <Navbar bg="dark" variant="white" className='p-2 sticky-top top-0'>
                <Container>
                    <Navbar.Brand>
                        {/* <h4 className='text-warning mb-0'>Chef Hunter</h4> */}
                        <img src="https://i.ibb.co/qk1vjvj/logo.png" alt="" />
                    </Navbar.Brand>
                    <Nav className="ms-auto web-navbar">
                        <Link to="/">Home</Link>
                        <Link to="/blog">Blog</Link>
                    </Nav>
                    <Nav className='ms-auto web-navbar'>
                        {user ?
                            <div>
                                <span className=' me-2'>Hello {user.email}</span>
                                <Button variant="warning" className='rounded-1 px-4 py-1' onClick={handleLogOut}>Logout</Button>
                                
                            </div>
                            :
                            <Link to="/login"><Button variant="warning" className='rounded-1 px-4 py-1'>Login</Button></Link>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;