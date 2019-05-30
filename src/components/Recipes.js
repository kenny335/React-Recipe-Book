import React from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom"


const Recipes = (props) => (
    <div class="container">
    <div class="row">
     { props.recipes.map((recipe)=> {
        return (
        <div key={recipe.recipe_id } class="col">
            <img src={recipe.image_url} alt={recipe.title} style={{width:"450px", height:"300px",  border: "black 3px solid"}}/>
            <h3>{ recipe.title }</h3>
            <h5>{`By: ${ recipe.publisher}`}</h5>
            <Link to={{ 
                pathname: `/recipe/${recipe.recipe_id }`,
                state: { recipe: recipe.title }
                }}>
            <Button bsStyle="success" className="viewRecipeButton">View Recipe</Button>
            </Link>
         </div>
            )
        })}
        
    </div>
    </div>
)

export default Recipes;