import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNewRecipe } from '../api/api';

const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState('');
  const [recipeImg, setRecipeImg] = useState('');
  const [prepTime, setRecipePrepTime] = useState('');
  const [cookTime, setRecipeCookTime] = useState('');
  const [servings, setRecipeServings] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const navigate = useNavigate();

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

    addNewRecipe(recipe).then((resp) => {
      setTimeout(() => {
        navigate('/recipes');
      }, 1000);
    }).catch(err => {
      navigate('/error');
    });
  }

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 p-6 bg-gray-300 rounded-lg">
      <div className="w-full flex flex-row justify-center mb-6">
        <strong className="text-3xl font-bold">Add a New Recipe</strong>
      </div>
      <form name="new-recipe-form" onSubmit={handleSubmit} >
        <div className="mb-4">
          <strong className="font-bold mb-2" htmlFor="recipeName">
            Recipe Name:
          </strong>
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
          <strong className="font-bold mb-2" htmlFor="recipeImg">
            Recipe Image:
          </strong>
          <input
            className="border rounded w-full py-2 px-3"
            type="text"
            id="recipeImg"
            placeholder="Link to image"
            value={recipeImg}
            onChange={(e) => setRecipeImg(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <strong className="font-bold mb-2" htmlFor="recipePrepTime">
            Prep Time:
          </strong>
          <input
            className="border rounded w-full py-2 px-3"
            type="text"
            id="recipePrepTime"
            placeholder="Enter a number..."
            value={prepTime}
            onChange={(e) => setRecipePrepTime(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <strong className="font-bold mb-2" htmlFor="recipeCookTime">
            Cook Time:
          </strong>
          <input
            className="border rounded w-full py-2 px-3"
            type="text"
            id="recipeCookTime"
            placeholder="Enter a number..."
            value={cookTime}
            onChange={(e) => setRecipeCookTime(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <strong className="font-bold mb-2" htmlFor="recipeServings">
            Servings:
          </strong>
          <input
            className="border rounded w-full py-2 px-3"
            type="text"
            id="recipeServings"
            placeholder="Enter a number..."
            value={servings}
            onChange={(e) => setRecipeServings(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <strong className="font-bold mb-2" htmlFor="ingredients">
            Ingredients:
          </strong>
          <textarea
            className="border rounded w-full py-2 px-3"
            id="ingredients"
            placeholder="Newline-seperated list of ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <strong className="font-bold mb-2" htmlFor="instructions">
            Instructions:
          </strong>
          <textarea
            className="border rounded w-full py-2 px-3"
            id="instructions"
            placeholder="Newline-seperated list of instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </div>

        <div className="w-full flex flex-row justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Save Recipe
          </button>
        </div>

      </form>
    </div>
  );
};

export {AddRecipe};

