import React from 'react';
import Header from '../../Shared/Header/Header';
import { Container } from 'react-bootstrap';
import Banner from '../../Shared/Banner/Banner';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <div className='blog-section-main'>
                    <div className='mt-5 text-center'>
                        <h2>Blogs</h2>
                    </div>
                    <div className="blog-section">
                        <div>
                            <h5>Tell us the differences between uncontrolled and controlled components.</h5>
                            <p>Ans: In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                        </div>
                        <div>
                            <h5>How to validate React props using PropTypes</h5>
                            <p>Ans: propTypes is used for props validation. If some of the props aren't using the correct type that we assigned, we will get a console warning. After we specify validation patterns, we will set App. defaultProps.</p>
                        </div>
                        <div>
                            <h5>Tell us the difference between nodejs and express js.</h5>
                            <p>Ans: js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
                        </div>
                        <div>
                            <h5>What is a custom hook, and why will you create a custom hook?</h5>
                            <p>Ans: Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Blog;