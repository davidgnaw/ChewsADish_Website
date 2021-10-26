const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipemodel");

router.route("/CreateYourOwnRecipe").post((req, res) => {
    const RecipeFor = req.body.RecipeFor;
    const Ingredients = req.body.Ingredients;
    const Instructions = req.body.Instructions;
    const Difficulty = req.body.Difficulty;
    const newRecipe = new Recipe({
        RecipeFor,
        Ingredients,
        Instructions,
        Difficulty
    });

    newRecipe.save();
})
module.exports = router;