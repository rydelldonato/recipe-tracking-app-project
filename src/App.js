import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [recipes, setRecipes] = useState(RecipeData);


  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  function addRecipe(newRecipe){
    setRecipes([...recipes, newRecipe])
    //the purpose of the spread operator: takes items within the array and spreading them one after the other --> equivalent of .push
  }

  function deleteRecipe(recipeText){
    setRecipes(recipes.filter(recipe=>recipe.name !== recipeText))}
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
