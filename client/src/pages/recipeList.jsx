import React from 'react';
import { RecipeCard } from '../components/recipeCard';

const RecipeList = (({data}) => {
  let recipeCards = [];

  for (let i = 0; i < data.length; i++) {
    recipeCards.push(<RecipeCard recipe={data[i]} id={i} />);
  }

  return (
    <>
      <div className="w-full flex flex-col justify-start items-center gap-y-4">
        {recipeCards}
      </div>
    </>
  );
});

export { RecipeList };
