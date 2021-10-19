import React, { useState } from 'react';
import '../../App.css';

const CreateYourOwnRecipe = () => {
    const[RecipeFor, setRecipeFor] = useState("");
    const[Ingredients, setIngredients] = useState("");
    const[Instructions, setInstructions] = useState("");
    const[Difficulty, setDifficulty] = useState("Medium")

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {RecipeFor, Ingredients, Instructions, Difficulty}

        console.log(blog)
    }


    return(
        <div className="CreateYourOwnRecipe">
            <br></br>
            <br></br>
            <h2>Add a New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>Recipe for:</label>
                <input
                  type="text"
                  required
                  value={RecipeFor}
                  onChange={(e) => setRecipeFor(e.target.value)}
                />
                <label>Ingredients:</label>
                <textarea
                  required
                  value={Ingredients}
                  onChange={(e) => setIngredients(e.target.value)}>   
                </textarea>
                <label>Instructions:</label>
                <textarea
                  required
                  value={Instructions}
                  onChange={(e) => setInstructions(e.target.value)}>
                </textarea>
                <label>Difficulty</label>
                <select
                  value={Difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                    <option value="Professional">Professional</option>
                </select>
                <button>submit</button>
            </form>
        </div>

    )
}

export default CreateYourOwnRecipe;