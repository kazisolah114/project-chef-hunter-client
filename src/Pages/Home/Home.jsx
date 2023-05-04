import React, { useState } from 'react';
import Chef from '../Chef/Chef';
import { useLoaderData, useParams } from 'react-router-dom';
import './Home.css'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const Home = () => {
    const [loading, setLoading] = useState(false) 
    const data = useLoaderData();
    const recipe_id = useParams()
    
    // console.log(id)
    return (
        <div>
            <div className="chef-sectin py-5 mt-5">
                <div className="chef-section-header text-center mb-5">
                    <h3>Our Top Chefs</h3>
                </div>
                <div className='chef-cards'>
                    {
                        data.map(chef => <Chef key={chef.id} chef={chef} recipe_id={recipe_id}></Chef>)
                    }
                </div>
            </div>
            {/* About us section */}
            <div className="about-section py-5">
                <div className="about-content d-flex align-items-center gap-5">
                    <div className="about-img">
                        <img className='' src="https://i.ibb.co/yF9J3cv/foodhand.png" alt="" />
                    </div>
                    <div className="about-text">
                        <p>ABOUT US</p>
                        <h3>Experience The Best Cuisines</h3>
                        <p>Celebrate at New Yorks most awarded restaurant, with panoramic views encompassing the Statue Of Liberty and Central Park. From intimate dinner parties in the Private Dining Room to large Cocktail events with a variety of foods.</p>
                        <button className='btn btn-outline-warning rounded-5 text-dark px-4 py-2'>Know More</button>
                    </div>
                </div>
            </div>
            {/* Menu Section */}
            <div className="menu-section py-5">
                <div className="menu-header text-center mb-5">
                    <h3>Our Multi-Cuisines Menu</h3>
                </div>
                <div className="menu-content">
                    <div className="menu-item text-center">
                        <img src="https://i.ibb.co/XbW97dR/food1.jpg" alt="" />
                        <h5>Persian Kabab Platter</h5>
                        <div className='text-warning'>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStarHalfAlt/></span>
                        </div>
                        <p>Super delicious platter that serves 4 person very easily Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <div className='d-flex justify-content-between align-items-center mt-4'>
                            <p>$125.00/<small>P</small></p>
                            <button className='btn btn-outline-warning text-dark'>Buy Now</button>
                        </div>
                    </div>
                    <div className="menu-item text-center">
                        <img src="https://i.ibb.co/6WSJFjk/food2.jpg" alt="" />
                        <h5>Italian Pizzaroma</h5>
                        <div className='text-warning'>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStarHalfAlt/></span>
                        </div>
                        <p>Super delicious platter that serves 4 person very easily Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur!</p>
                        <div className='d-flex justify-content-between align-items-center mt-4'>
                            <p>$120.00/<small>P</small></p>
                            <button className='btn btn-outline-warning text-dark'>Buy Now</button>
                        </div>
                    </div>
                    <div className="menu-item text-center">
                        <img src="https://i.ibb.co/bHwjQS3/food3.jpg" alt="" />
                        <h5>Mexican Nachos</h5>
                        <div className='text-warning'>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStarHalfAlt/></span>
                        </div>
                        <p>Super delicious platter that serves 4 person very easily Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        <div className='d-flex justify-content-between align-items-center mt-4'>
                            <p>$120.00/<small>P</small></p>
                            <button className='btn btn-outline-warning text-dark'>Buy Now</button>
                        </div>
                    </div>
                    <div className="menu-item text-center">
                        <img src="https://i.ibb.co/rcN2Zy7/food4.jpg" alt="" />
                        <h5>Pizza Napoletana</h5>
                        <div className='text-warning'>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStarHalfAlt/></span>
                        </div>
                        <p>Super delicious platter that serves 4 person very easily Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className='d-flex justify-content-between align-items-center mt-4'>
                            <p>$80.00/<small>P</small></p>
                            <button className='btn btn-outline-warning text-dark'>Buy Now</button>
                        </div>
                    </div>
                    <div className="menu-item text-center">
                        <img src="https://i.ibb.co/WtbVJK6/food5.jpg" alt="" />
                        <h5>Tonda Romana</h5>
                        <div className='text-warning'>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                        </div>
                        <p>Super delicious platter that serves 4 person very easily Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
                        <div className='d-flex justify-content-between align-items-center mt-4'>
                            <p>$110.00/<small>P</small></p>
                            <button className='btn btn-outline-warning text-dark'>Buy Now</button>
                        </div>
                    </div>
                    <div className="menu-item text-center">
                        <img src="https://i.ibb.co/1MDV0v3/food6.jpg" alt="" />
                        <h5>Pakistani Reshmi Kabab</h5>
                        <div className='text-warning'>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStarHalfAlt/></span>
                        </div>
                        <p>Super delicious platter that serves 4 person very easily. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <div className='d-flex justify-content-between align-items-center mt-4'>
                            <p>$100.00/<small>P</small></p>
                            <button className='btn btn-outline-warning text-dark'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;