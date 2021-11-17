import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';


const IngredientWalmart = () => {
    const [searchTerm, setSearchTerm] = useState(null);
    const [ingredients, setIngredients] = useState(null);
    const [isFound, setIsFound] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3456/api/substitution')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setIngredients(data)
            })
    }, []);

    function checkIngredient(){
        if(ingredients.filter((ingredient)=>{ingredient.ingredient == searchTerm}).length != 0){return console.log("Found")}
        else{return window.open(`https://www.walmart.com/search?query=${searchTerm}&search_redirect=false`)}
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        checkIngredient();
    }



    return(
        <div className="CreateYourOwnRecipe">
            <br></br>
            <br></br>
            <h2>Search for Ingredients</h2>
            <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  required
                  placeholder="please input ingredients"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
  
    )
}

export default IngredientWalmart