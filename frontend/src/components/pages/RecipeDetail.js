import '../../App.css'
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const RecipeDetail = () => {
    const { id } = useParams();
    const {data:recipe, isPending, error} = useFetch('http://localhost:3456/api/recipes/' + id)


    
    return (
        <div className='recipe-detail'>
            { isPending && <div> Loading... </div> }
            { error && <div> {error} </div>}
            { recipe && (
                <article>
                    <h2> { recipe.name }</h2>
                    <h3> Ingredients </h3>
                    <br></br>
                    <p> { recipe.ingredients}</p> 
                    <br></br>
                    <h3> Instructions</h3>
                    <br></br>
                    <p> { recipe.instructions}</p>
                </article>
                )}
        </div>
    );
}

export default RecipeDetail