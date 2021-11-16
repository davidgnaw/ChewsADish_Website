const mongoose = require("mongoose");

const recipeSchema = {
    RecipeFor: String,
    Ingredients: String,
    Instructions: String,
    Difficulty: String
}

const Recipe = mongoose.model("Recipe", recipeSchema)

module.exports = Recipe;