import React from 'react';
import Header from '../../Shared/Header/Header';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <h2>This is blog page</h2>
            </Container>
        </div>
    );
};

export default Blog;