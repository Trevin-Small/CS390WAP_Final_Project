import React from 'react';

const RecipeCard = (({recipe, id}) => {
  let ingredients = [];

  for (let i = 0; i < recipe.ingredients.length; i++) {
    ingredients.push(<span className="p-1 m-0 bg-theme-blue rounded-md">{recipe.ingredients[i]}</span>);
  }

  return (
    <>
      <a className="w-full max-w-5xl flex flex-col justify-start items-start bg-gray-300 rounded-lg text-black" href={"/recipe/?id=" + id}>
        <strong className="mt-4 ml-8 text-4xl font-semibold">{recipe.name}</strong>
        <div className="w-full flex flex-row justify-evenly items-start px-8 py-4 gap-x-8">

          <div className="w-1/2 rounded-lg overflow-hidden">
            <img src={recipe.img} alt="" className="max-h-60 rounded-md" />
          </div>

          <div className="w-1/2 flex flex-col justify-start items-center text-center">

            <strong className="text-xl font-bold">Recipe Information</strong>
            <hr className="border-gray-600 border w-full" />
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

            <strong className="text-xl font-bold mt-6">Ingredients</strong>
            <hr className="border-gray-600 border w-full" />
            <div className="my-1 w-full flex flex-row flex-wrap justify-center gap-x-1 gap-y-1 text-sm text-white font-semibold">
              {ingredients}
            </div>

          </div>

        </div>
      </a>
    </>
  );

});

export { RecipeCard };
