import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';


const IngredientWalmart = () => {
    const [searchTerm, setSearchTerm] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        window.open(`https://www.walmart.com/search?query=${searchTerm}&search_redirect=false`)
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