import React from "react";
import "./style.scss";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import BurritoImage from "../../resources/images/burrito.jpeg";
import Button from "react-bootstrap/Button";
import { Jumbotron, Container } from "react-bootstrap";
import {Link} from 'react-router-dom';
import axios from 'axios';


const Recipe = props => (
    <Card>
    <Card.Img variant="top" src={BurritoImage} />
    <Card.Body>
      <Card.Title>{props.recipe.recipeName}</Card.Title>
      <Card.Text>
        {props.recipe.recipeDescription}
      </Card.Text>
      <Button variant="primary">View Recipe</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Added on: {props.recipe.dateAdded}</small>
    </Card.Footer>
    </Card>
)


export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      
      recipes:[]
    };
  }

  componentDidMount() {
      axios.get('http://localhost:4000/recipe/featured')
      .then(response => {
        this.setState({recipes: response.data
      });
      })
      .catch(function(error){
          console.log(error);
      })
  }



  recipeCard() {
    return this.state.recipes.map(function(currentRecipe, i){
      return <Recipe recipe={currentRecipe} key={i}  />;
    })
  }



  render() {
    return (
      <div className="cards">
       <div>
       <Jumbotron className="justify-content-md-center jumbo">
          <Container>
            <h1>Welcome to Recipe Library</h1>
            <p>You can browse and add recipes. The last 8 recipes added to the databse are shown below.</p>
            <hr />
            <p>
              <Link to="/add"><Button variant="primary">Add Recipe</Button></Link>
            </p>
          </Container>
        </Jumbotron>
       </div>
        <div className="top-row">

          

          <CardDeck className="main-content">
              { this.recipeCard() }                        
            {/*
            <Card>
              <Card.Img variant="top" src={BurritoImage} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={BurritoImage} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={BurritoImage} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            */}    
          </CardDeck>
        </div>

        {/* 
        <div className="bottom-row">
          <CardDeck className="main-content">
            <Card>
              <Card.Img variant="top" src={BurritoImage} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={BurritoImage} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={BurritoImage} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={BurritoImage} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
                 
          </CardDeck>
        </div>
        */}
      </div>
    );
  }
}
