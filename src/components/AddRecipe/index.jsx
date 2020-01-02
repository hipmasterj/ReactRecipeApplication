import React from "react";
import "./styles.scss";
import { Container, Jumbotron} from "react-bootstrap";


export default class AddRecipe extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeRecipeName = this.onChangeRecipeName.bind(this);
    this.onChangePrepTime = this.onChangePrepTime.bind(this);
    this.onChangeCookingTime = this.onChangeCookingTime.bind(this);
    this.onChangeNumServings = this.onChangeNumServings.bind(this);
    this.onChangeDifficulty = this.onChangeDifficulty.bind(this);
    this.onChangeMethod = this.onChangeMethod.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {

        recipeName: '',
        prepTime: '',
        cookingTime: '',
        numServings: '',
        difficulty: '',
        method: ''

    };
  }

    onChangeRecipeName(e){
      this.setState({
          recipeName: e.target.value
      })
    }

    onChangePrepTime(e){
        this.setState({
            prepTime: e.target.value
        })
    }      

    onChangeCookingTime(e){
        this.setState({
            cookingTime: e.target.value
        })
    }
    onChangeNumServings(e){
        this.setState({
            numServings: e.target.value
        })
    }
    onChangeDifficulty(e){
        this.setState({
            difficulty: e.target.value
        })
    }
    onChangeMethod(e){
        this.setState({
            method: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Recipe Name: ${this.state.recipeName}`);
        console.log(`Prep Time: ${this.state.prepTime}`);
        console.log(`Cooking Time: ${this.state.cookingTime}`);
        console.log(`Num Servings: ${this.state.numServings}`);
        console.log(`Difficulty: ${this.state.difficulty}`);
        console.log(`Method: ${this.state.method}`);

        this.setState({
            recipeName: '',
            prepTime: '',
            cookingTime: '',
            numServings: 1,
            difficulty: '',
            method: ''
        })
    }

  render() {
    return (
      <Container>
        <Jumbotron className="justify-content-md-center jumbo">
          <Container>
            <h1>Please Enter Recipe Details Below</h1>
           
            <hr />
            <form onSubmit={this.onSubmit}>

                <label className='form-layout'>Recipe Name:</label>
                <input
                    className="form-layout"
                    type="text"
                    name="recipeName"
                    id="recipeName"
                    placeholder="Recipe Name..."
                    value={this.state.recipeName}
                    onChange={this.onChangeRecipeName}
                />

                <label className='form-layout'>Prep Time:</label>
                <input
                    className="form-layout"
                    type="text"
                    name="prepTime"
                    id="prepTime"
                    value={this.state.prepTime}
                    placeholder="Prep Time..."
                    onChange={this.onChangePrepTime}
                />

                <label className='form-layout'>Cooking Time:</label>  
                <input
                    className="form-layout"
                    type="text"
                    name="cookingTime"
                    id="cookingTime"
                    value={this.state.cookingTime}
                    placeholder="Cooking Time..."
                    onChange={this.onChangeCookingTime}
                />

                <label className='form-layout'>Number of Servings:</label>  
                <select className="form-layout" id="numServings" value={this.state.numServings} onChange={this.onChangeNumServings}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11+</option>
                </select>
                
                
                <label className='form-layout'>Difficulty</label>
                <select className="form-layout" id="difficulty" value={this.state.difficulty} onChange={this.onChangeDifficulty}>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>

                <div className="form-group">
                    <label className='form-layout'>Method:</label>
                    <textarea name="method" value={this.state.method} onChange={this.onChangeMethod} id='method' rows="5" className='form-layout form-control' />
                </div>

                <hr />

                <input type="submit" value="Add Recipe" className="btn btn-primary" />
                    
 
            </form>
           
          </Container>
        </Jumbotron>
      </Container>
    );
  }
}
