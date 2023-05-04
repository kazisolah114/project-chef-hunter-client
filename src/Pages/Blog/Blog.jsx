import React from 'react';
import Header from '../../Shared/Header/Header';
import { Container } from 'react-bootstrap';
import Banner from '../../Shared/Banner/Banner';

const Blog = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Container>
                <h2>This is blog page</h2>
            </Container>
        </div>
    );
};

export default Blog;