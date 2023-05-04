import React, { useContext, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    // console.log(createUser)
    const [success, setSuccess] = useState('')
    const handleCreateUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const photo = event.target.photo.value;
        // console.log(name, email, password, photo)
        
        if(password.length < 6) {
            alert("the password must be greater than six characters")
            return;
        }
        setSuccess('')
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setSuccess('Registration successfull!')
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }
    return (
        <div>
            <Header></Header>
            <Container className='mt-5'>
                <div>
                    <Form onSubmit={handleCreateUser} className='mx-auto w-25 border p-4 rounded-1'>
                        <Form.Text className='text-center'>
                            
                        </Form.Text>
                        <Form.Text className='text-center'>
                            <p className='text-success'>{success}</p>
                        </Form.Text>
                        <Form.Text className='text-center'>
                            <h5>Register your account</h5>
                        </Form.Text>
                        <Form.Group className="my-3">
                            <Form.Label>Your name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" name="photo" placeholder="Photo URL" />
                        </Form.Group>

                        <Button variant="warning" type="submit" className='mb-3 w-100 text-white'>
                            Register
                        </Button>
                        <Form.Text className="text-muted text-center">
                            <p>Already have an account? <Link to="/login">Login here</Link></p>
                        </Form.Text>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Register;