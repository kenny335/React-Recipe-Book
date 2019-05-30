import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import App from "../App"

const API_KEY= "726237903540780fabd8614c1fe4e75d";
const API_KEY2 = "bfb76b78b11e7308cc3c027865a508dd";
const API_KEY3= "f562842f0ff6b2d4fd24b9601aeb5e1b";
const API_KEY4 = "1b6fefba322620c34c3147459e9ad728";
const API_KEY5 = "d8845808c4acac35ceda06fdac256dd1";


class Recipe extends React.Component {

    state = {
        activeRecipe: []
    }

    componentDidMount = async() => {
        const title = this.props.location.state.recipe;
        const req = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY5}&q=${title}&page=`) 
        const res = await req.json();
        this.setState({ activeRecipe: res.recipes[0]});
        console.log(this.state.activeRecipe)
    }

    goBack=()=> {
        this.props.history.push("/");
        console.log(this.props)
    }
    
    render() {

        console.log(this.props);
        return(
            <div className="container">
                {
                    this.state.activeRecipe.length !==0 && 
                        <div className="active-recipe">
                        <img className="active-image" src={this.state.activeRecipe.image_url} alt={this.state.activeRecipe.title}/>
                        <h3>{ this.state.activeRecipe.title}</h3>
                        <h4>Publisher: <span>{ this.state.activeRecipe.publisher}</span></h4>
                        <p>Publisher URL: <span><a href={this.state.activeRecipe.publisher_url}>{this.state.activeRecipe.publisher_url}</a></span></p>
                        <Button bsStyle="success"><Link to="/">Go Home</Link></Button>
                </div>
                }
                
            </div>
        );
    }
}
export default Recipe;