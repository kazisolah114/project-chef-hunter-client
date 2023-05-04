import { useState } from "react"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { FaHeart } from 'react-icons/fa';
import Rating from "react-rating";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaStar, FaStarHalfAlt } from 'react-icons/fa';


const SingleRecipe = ({ recipe }) => {
    const [disableBtn, setDisableBtn] = useState()
    const handleButtonClick = () => {
        toast('Added to the favourite list')
        setDisableBtn(true)
    }
    const {
        recipe_name,
        recipe_image,
        ingredients,
        description,
        cooking_method,
        rating } = recipe;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={recipe_image} />
                <Card.Body>
                    <Card.Title><h4>{recipe_name}</h4></Card.Title>
                    <Card.Text>
                        <div className="d-flex flex-wrap"><b className="text-secondary mb-1 text-bold">Ingredients: </b> {ingredients.map((i, index) => <div key={index} className="ingredients"><p className="mb-0 ms-1" key={index}>{i}, etc.</p></div>)}</div>
                        {/* <p>{description}</p> */}
                        <p className="mt-3"><b className="text-secondary">Cooking method:</b><br /> {cooking_method}</p>
                        <div className='d-flex align-items-center justify-content-between mt-4'>
                                <Rating className='text-warning'
                                    readonly
                                    placeholderRating={rating}
                                    emptySymbol={<FaStarHalfAlt/>}
                                    placeholderSymbol={<FaStar/>}
                                    fullSymbol={<FaStar/>}
                                    
                                />
                            {disableBtn ?
                                <button className='btn btn-outline-warning text-dark disabled'><FaHeart className='text-danger me-1' /> Favourite</button>
                                :
                                <div>
                                    <button onClick={handleButtonClick} className='btn btn-outline-warning text-dark'><FaHeart className='text-danger me-1' /> Favourite</button>
                                <ToastContainer />
                                </div>
                            }
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default SingleRecipe;