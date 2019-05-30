import React from "react";

const InputForm = (props) => (
 
        <form onSubmit={props.getRecipe} style={{ marginBottom:"50px", marginTop:"20px"}}> 
            <input placeholder="Type an ingredient" className="form__input" type="text" name="recipename"/>
            <button className="form__button">Search</button>
        </form>

)

export default InputForm;