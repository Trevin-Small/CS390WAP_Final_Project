import Axios from 'axios';

export async function getAllRecipes(options) {
  return (await Axios.get("http://localhost:8000/get_recipes/all")).data;
}