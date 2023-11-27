import React, { useState } from 'react';
import { addNewRecipe } from '../api/api';

const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState('');
  const [recipeImg, setRecipeImg] = useState('');
  const [prepTime, setRecipePrepTime] = useState('');
  const [cookTime, setRecipeCookTime] = useState('');
  const [servings, setRecipeServings] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    let recipe = {
      "name": recipeName,
      "img": recipeImg,
      "prep_time": prepTime + " mins",
      "cook_time": cookTime + " mins",
      "total_time": (parseInt(prepTime) + parseInt(cookTime)) + " mins",
      "servings": servings,
      "ingredients": ingredients.split('\n'),
      "instructions": instructions.split('\n')
    };

    addNewRecipe(recipe);
  }

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Add a New Recipe</h2>
      <form name="new-recipe-form" onSubmit={handleSubmit} >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipeName">
            Recipe Name:
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="text"
            id="recipeName"
            placeholder="e.g. 'Pizza'"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipeImg">
            Recipe Image:
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="text"
            id="recipeImg"
            placeholder="link to image"
            value={recipeImg}
            onChange={(e) => setRecipeImg(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipePrepTime">
            Prep Time:
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="text"
            id="recipePrepTime"
            placeholder="enter a number..."
            value={prepTime}
            onChange={(e) => setRecipePrepTime(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipeCookTime">
            Cook Time:
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="text"
            id="recipeCookTime"
            placeholder="enter a number..."
            value={cookTime}
            onChange={(e) => setRecipeCookTime(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipeServings">
            Servings:
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="text"
            id="recipeServings"
            placeholder="enter a number..."
            value={servings}
            onChange={(e) => setRecipeServings(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
            Ingredients:
          </label>
          <textarea
            className="border rounded w-full py-2 px-3"
            id="ingredients"
            placeholder="newline seperated list of ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructions">
            Instructions:
          </label>
          <textarea
            className="border rounded w-full py-2 px-3"
            id="instructions"
            placeholder="newline seperated list of instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export {AddRecipe};

