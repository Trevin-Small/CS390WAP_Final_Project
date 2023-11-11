import React from 'react';
import { RecipeCard } from '../components/recipeCard';

const RecipeList = (({data}) => {
  let recipes = [];

  for (let i = 0; i < data.length; i++) {
    recipes.push(<RecipeCard recipe={data[i]} />);
  }

  return (
    <>
      <div className="w-full flex flex-col justify-start items-center gap-y-4">
        {recipes}
      </div>
    </>
  );
});

export { RecipeList };