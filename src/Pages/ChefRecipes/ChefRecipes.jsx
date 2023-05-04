
import Header from '../../Shared/Header/Header';
// import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FaCheckCircle, FaHamburger, FaHeart } from 'react-icons/fa';
import './ChefRecipes.css';
import Row from 'react-bootstrap/Row';
import SingleRecipe from './SingleRecipe';

const ChefRecipes = () => {

    const data = useLoaderData()
    console.log(data)
    const { id, image, name, bio, years_experience, rating, num_recipes, num_likes, recipes } = data;

    return (
        <div>
            <Header></Header>
            <Container>
                <div className="chef-details p-3 mt-5 d-flex align-items-center gap-3">
                    <div className='chef-image chef-details-image p-2'>
                        <img src={image} alt="" />
                    </div>
                    <div className="chef-info chef-details-info">
                        <h4>{name}</h4>
                        <p><span><FaCheckCircle /></span> Experience: {years_experience} years</p>
                        <p className='mb-3'><span><FaHamburger /></span> Recipe: {num_recipes} items</p>
                        {/* <p className='mb-3'><span><FaHeart /></span> {num_likes} likes</p> */}
                        <b className='text-secondary'>About {name}:</b>
                        <p>{bio}</p>
                        <div className='d-flex align-items-center justify-content-between mt-5'>
                            <p>Rating: {recipes[0].rating}</p>
                            <p className='mb-3'><span><FaHeart /></span> {num_likes} likes</p>
                        </div>
                    </div>
                </div>

                {/* Recipes Section */}
                <div className="recipes-section py-5">
                    <div className="recipes-header text-center mb-3">
                        <h3>Top Recipes of {name}</h3>
                    </div>
                    <Row xs={1} md={3} className="g-4">
                        {
                            recipes?.map(recipe => <SingleRecipe recipe={recipe} key={recipe.id} />)
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default ChefRecipes;