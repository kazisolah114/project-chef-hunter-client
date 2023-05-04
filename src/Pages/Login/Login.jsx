import React, { useContext, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import app from '../../Firebase/config.firebase';


const Login = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const {signInUser, googleSignIn} = useContext(AuthContext);
    // console.log(googleSignIn)
    // console.log(signInUser)
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const handleSignInUser = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password)
        setSuccessMessage('')
        const form = event.target;
        form.reset()
        signInUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            setErrorMessage()
            setSuccessMessage("Login successfull!")
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage)
            setErrorMessage(errorMessage)

        })
        
    }

    // Google Popup not working
    const handleGoogleSignIn = () => {
        googleSignIn(auth, provider)
        .then(res => {
            console.log(res.user)
        })
        .catch(err => {
            console.log(err.message)
        })
    }
    

    return (
        <div>
            <Header></Header>
            <Container className='mt-5'>
                <div>
                    <Form onSubmit={handleSignInUser} className='mx-auto w-25 border p-4 rounded-1'>
                        <Form.Text className='text-center'>
                            <p className='text-danger'>{errorMessage}</p>
                        </Form.Text>
                        <Form.Text className='text-center'>
                            <p className='text-success'>{successMessage}</p>
                        </Form.Text>
                        <Form.Text className='text-center'>
                            <h5>Sign in your account</h5>
                        </Form.Text>
                        <Form.Group className="my-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" required />
                        </Form.Group>

                        <Button variant="warning" type="submit" className='mb-3 w-100 text-white'>
                            Login
                        </Button>
                        <Form.Text className="text-muted text-center">
                            <p>New to the website? <Link to="/register">Register here</Link></p>
                        </Form.Text>
                        <div className='text-center'>
                            <h6>OR</h6>
                        </div>
                        <div className='login-with'>
                            <Button onSubmit={handleGoogleSignIn} variant="warning" className='w-100 mb-2 text-white'><FaGoogle/> Login with Google</Button>
                            <Button variant="warning" className='w-100 text-white'><FaGithub/> Login with Github</Button>
                        </div>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Login;