import React from 'react';
import './Banner.css'
import { Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='header-banner d-flex align-items-center justify-content-center'>
            <div className='text-center'>
            <h2>THE BEST INGREDIENTS</h2>
            <p>Melts in Your Mouth, Not in Your Hands</p>
            <Button className='px-4 py-2 text-white rounded-0' variant="warning">SEE MENU</Button>
            </div>
        </div>
    );
};

export default Banner;