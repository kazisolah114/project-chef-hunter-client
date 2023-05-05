import React from 'react';
import { Button } from 'react-bootstrap';
import './Chef.css'
import { FaCheckCircle, FaHamburger, FaHeart } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Chef = ({ chef, recipe_id }) => {
    const { id, image, name, years_experience, num_recipes, num_likes } = chef
    return (
        <div className="chef-content rounded-1 d-flex gap-3 align-items-center">
            <div className='chef-image p-2'>
                <LazyLoadImage src={image} />
            </div>
            <div className="chef-info">
                <h5>{name}</h5>
                <p><span><FaCheckCircle/></span> Experience: {years_experience} years</p>
                <p><span><FaHamburger/></span> Recipe: {num_recipes} items</p>
                <p><span><FaHeart/></span> {num_likes} likes</p>
                <Button href={`${id}`} variant="warning" className="rounded-1 text-white mt-3">View Recipes</Button>
            </div>
        </div>
    );
};

export default Chef;