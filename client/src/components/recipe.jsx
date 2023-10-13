import React from "react";

const Recipe = (({name, recipe_id}) => {

  return (
    <>
      <div className="w-full max-w-5xl flex flex-col justify-start items-center bg-gray-300 rounded-lg text-black">
        <strong className="mt-4 text-4xl font-semibold">{name}</strong>
        <div className="mx-6 flex flex-col items-center">
          <div className="w-full my-2 rounded-lg overflow-hidden m-0">
            <img src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" alt="" />
          </div>
          <div className="w-full px-4 flex flex-row justify-around text-sm md:text-lg">
            <div className="flex flex-col items-center">
              <strong>Prep:</strong>
              <p>15 min</p>
            </div>
            <div className="flex flex-col items-center">
              <strong>Cook:</strong>
              <p>15 min</p>
            </div>
            <div className="flex flex-col items-center">
              <strong>Total:</strong>
              <p>30 min</p>
            </div>
            <div className="flex flex-col items-center">
              <strong>Servings:</strong>
              <p>4</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-left px-8 py-4">

          <strong className="text-3xl">Ingredients:</strong>
          <hr className="w-full border-gray-600"></hr>
          <ul className="pl-6">
            <li>Cheese</li>
            <li>Dough</li>
            <li>Sauce</li>
            <li>Pepperoni</li>
          </ul>

          <strong className="text-3xl mt-4">Instructions:</strong>
          <hr className="w-full border-gray-600"></hr>
          <ul className="pl-6">
            <li>Cheese</li>
            <li>Dough</li>
            <li>Sauce</li>
            <li>Pepperoni</li>
          </ul>

        </div>
      </div>
    </>
  );

});

export { Recipe };
