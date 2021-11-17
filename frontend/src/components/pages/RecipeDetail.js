import '../../App.css'
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const RecipeDetail = () => {
    const { id } = useParams();
    const {data:recipe, isPending, error} = useFetch('http://localhost:3456/api/recipes/' + id)

//NOTE: I know the current calls to db look ugly, still learning how to use a for loop for this

    return (
    
        
        <div className='recipe-detail'>
            { isPending && <div> Loading... </div> }
            { error && <div> {error} </div>}
            { recipe && (
                <article>
                    <h2> { recipe.name }</h2>
                    <h3> Ingredients </h3>
                    <br></br> 
                    
                    <p> { recipe.ingredients[0]}</p>
                    <p>  { recipe.ingredients[1]}</p>
                    <p>  { recipe.ingredients[2]}</p>
                    <p>  { recipe.ingredients[3]}</p>
                    <p>  { recipe.ingredients[4]}</p> 
                    <p>  { recipe.ingredients[5]}</p> 
                    <p>  { recipe.ingredients[6]}</p>
                    <p>  { recipe.ingredients[7]}</p>
                    <p>  { recipe.ingredients[8]}</p>
                    <p>  { recipe.ingredients[9]}</p>
                    <p>  { recipe.ingredients[10]}</p>
                    <p>  { recipe.ingredients[11]}</p>
                   
                    
                    <br></br>
                    <h3> Instructions</h3>
                    <br></br>
                    <p> { recipe.instructions.split(".")[0]}</p>
                    <p> { recipe.instructions.split(".")[1]}</p>
                    <p> { recipe.instructions.split(".")[2]}</p>
                    <p> { recipe.instructions.split(".")[3]}</p>
                    <p> { recipe.instructions.split(".")[4]}</p>
                    <p> { recipe.instructions.split(".")[5]}</p>
                    <p> { recipe.instructions.split(".")[6]}</p>
                    <p> { recipe.instructions.split(".")[7]}</p>
                    <p> { recipe.instructions.split(".")[8]}</p>
                    <p> { recipe.instructions.split(".")[9]}</p>
                    <p> { recipe.instructions.split(".")[10]}</p>
                    <p> { recipe.instructions.split(".")[11]}</p>
                    <p> { recipe.instructions.split(".")[12]}</p>
                    <p> { recipe.instructions.split(".")[13]}</p>
                    <p> { recipe.instructions.split(".")[14]}</p>
                    <p> { recipe.instructions.split(".")[15]}</p>
                    <p> { recipe.instructions.split(".")[16]}</p>
                    <p> { recipe.instructions.split(".")[17]}</p>
                    <p> { recipe.instructions.split(".")[18]}</p>
                    <p> { recipe.instructions.split(".")[19]}</p>
                    <p> { recipe.instructions.split(".")[20]}</p>
                    <p> { recipe.instructions.split(".")[21]}</p>
                    <p> { recipe.instructions.split(".")[22]}</p>

                </article>
                )}
        </div>
    );
}

export default RecipeDetail