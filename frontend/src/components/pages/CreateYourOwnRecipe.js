import React, { useState } from 'react';
import '../../App.css';

const CreateYourOwnRecipe = () => {
    const[name, setRecipeFor] = useState("");
    const[ingredients, setIngredients] = useState("");
    const[instruction, setInstructions] = useState("");
    const[Difficulty, setDifficulty] = useState("Medium")
    const[isPending, setIsPending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const recipe = {name, instruction, ingredients}

        setIsPending(true);
        fetch("http://localhost:3456/api/recipes",{
          method:"POST",
          headers:{"Content-Type": "application/json"},
          body:JSON.stringify(recipe)
        }).then(() => {
          console.log(recipe)

          setIsPending(false);
        })
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
                  value={name}
                  onChange={(e) => setRecipeFor(e.target.value)}
                />
                <label>Ingredients:</label>
                <textarea
                  required
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}>   
                </textarea>
                <label>Instructions:</label>
                <textarea
                  required
                  value={instruction}
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
                { !isPending && <button>submit</button>}
                { isPending && <button disabled>loading...</button>}
            </form>
        </div>

    )
}

export default CreateYourOwnRecipe;