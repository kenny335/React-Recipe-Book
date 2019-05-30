import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputForm from "./components/InputForm";
import Recipes from "./components/Recipes";



const API_KEY= "726237903540780fabd8614c1fe4e75d";
const API_KEY2 = "bfb76b78b11e7308cc3c027865a508dd";
const API_KEY3= "f562842f0ff6b2d4fd24b9601aeb5e1b";
const API_KEY4 = "1b6fefba322620c34c3147459e9ad728";
const API_KEY5 ="d8845808c4acac35ceda06fdac256dd1";

class App extends Component {

  state= {
    recipes: []
  }

  getRecipe  = async (e) => {
  e.preventDefault();
  const recipeName = e.target.elements.recipename.value;
  const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY5}&q=${recipeName}&page=`)
  
  const data = await api_call.json();
  this.setState({ recipes: data.recipes });
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          React Cookbook
        </header>
        <InputForm getRecipe={this.getRecipe} />
       <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
