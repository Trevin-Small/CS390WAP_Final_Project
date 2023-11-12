import React from 'react';

const Recipe = (({recipe}) => {
  let ingredients = [];
  let instructions = [];

  for (let i = 0; i < recipe.ingredients.length; i++) {
    ingredients.push(<li>{recipe.ingredients[i]}</li>);
  }

  for (let i = 0; i < recipe.instructions.length; i++) {
    instructions.push(
      <div className="mb-6">
        <strong className="text-xl">{"Step " + (i + 1)}</strong>
        <p>{recipe.instructions[i]}</p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full max-w-5xl flex flex-col justify-start items-center bg-gray-300 rounded-lg text-black">
        <strong className="mt-4 text-4xl font-semibold">{recipe.name}</strong>
        <div className="mx-6 flex flex-col items-center">
          <div className="w-full my-2 rounded-lg overflow-hidden m-0">
            <img src={recipe.img} alt="" className="rounded-lg" />
          </div>
          <div className="w-full px-4 flex flex-row justify-around text-sm md:text-lg">
            <div className="flex flex-col items-center">
              <strong>Prep:</strong>
              <p>{recipe.prep_time}</p>
            </div>
            <div className="flex flex-col items-center">
              <strong>Cook:</strong>
              <p>{recipe.cook_time}</p>
            </div>
            <div className="flex flex-col items-center">
              <strong>Total:</strong>
              <p>{recipe.total_time}</p>
            </div>
            <div className="flex flex-col items-center">
              <strong>Servings:</strong>
              <p>{recipe.servings}</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-left px-8 py-4">

          <strong className="text-3xl">Ingredients:</strong>
          <hr className="w-full border-gray-600"></hr>
          <ul className="pl-6">
            {ingredients}
          </ul>

          <strong className="text-3xl mt-4">Instructions:</strong>
          <hr className="w-full border-gray-600 mb-6"></hr>
          {instructions}

        </div>
      </div>
    </>
  );

});

export { Recipe };
