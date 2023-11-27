import React, { useState } from 'react';

const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Add a New Recipe</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipeName">
            Recipe Name:
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="text"
            id="recipeName"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
            Ingredients:
          </label>
          <textarea
            className="border rounded w-full py-2 px-3"
            id="ingredients"
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

