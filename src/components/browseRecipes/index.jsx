import './styles.scss';
import React from 'react';
import axios from 'axios';
import { Container, Jumbotron } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Recipe = props => (
    <tr scope="row">
        <td>{props.recipe.recipeName}</td>
        <td>{props.recipe.prepTime}</td>
        <td>{props.recipe.cookingTime}</td>
        <td>{props.recipe.numServings}</td>
        <td>{props.recipe.difficulty}</td>
        <td>
            <Link to={"/edit/"+ props.recipe._id}>Edit</Link>
        </td>
    </tr>
)

export default class BrowseRecipes extends React.Component {
    constructor(props){
        super(props);
        this.state = {recipes:[]};
        
    }

    componentDidMount() {
        axios.get('http://localhost:4000/recipe/')
        .then(response => {
            this.setState({recipes: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    recipeList() {
        return this.state.recipes.map(function(currentRecipe, i){
            return <Recipe recipe={currentRecipe} key={i} />;
        });
    }



    render (){
        return (
            <Container className='content table-responsive'> 
                
                    <Container>
                    <h1>All Recipes</h1>
                    <hr/>
                    <table className="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Recipe Name</th>
                                <th scope="col">Prep Time</th>
                                <th scope="col">Cooking Time</th>
                                <th scope="col">Num of Servings</th>
                                <th scope="col">Difficulty</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.recipeList() }
                        </tbody>
                        
                    </table>
                    </Container>
                
            </Container>
            
        )
    }





}