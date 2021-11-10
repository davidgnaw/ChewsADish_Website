import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Fuse from 'fuse.js';
import RecipeList from '../RecipeList';

const Search = () => {
    const[search,setSearch] = useState('');
    const [recipes, setRecipes] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [results, setResults] = useState(null);
    const [recipeResults, setRecipeResults] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3456/api/recipes')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setRecipes( data );
                setIsPending(false);
            })
    }, []);
    
        
    
    

    function handleOnSearch({currentTarget = {}}){
        const {value} = currentTarget;
        setSearch(value);
        const fuse = new Fuse(recipes, {
            keys: [
                'name',
                'tags'
            ],
            includeScore: true   
        });
        setResults(fuse.search(search));
        if(results != null){setRecipeResults(results.map(result => result.item))};
    }


    return(
        <div className="CreateYourOwnRecipe">
            <br></br>
            <h2>Search</h2>
            <form>
                <input 
                    type="text"
                    required
                    value={search}
                    placeholder="Look For a Recipe"
                    onChange={handleOnSearch}
                />
            </form>
            {recipeResults && <RecipeList recipes = {recipeResults.slice(0,5)}/>}
        </div>
    )
}

export default Search;