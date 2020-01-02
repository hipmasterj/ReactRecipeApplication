import React from "react";
import "./App.css";
import Navigation from "./components/navigation/index.jsx";
import HomePage from "./components/mainPage/index.jsx";
import AddRecipe from "./components/AddRecipe/index.jsx";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./custom.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/add" component={AddRecipe} />
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
