import axios from 'axios';

export async function getAllRecipes() {
  return (await axios.get("http://localhost:8000/get_recipes/all")).data;
}

export async function addNewRecipe(recipe) {
  console.log("Adding recipe: ", recipe);
  axios.post("http://localhost:8000/addrecipe", recipe);
}