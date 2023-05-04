import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Banner from '../../Shared/Banner/Banner';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Container>
                <Outlet></Outlet>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export default Main;