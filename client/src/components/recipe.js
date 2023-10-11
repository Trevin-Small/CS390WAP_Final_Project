import React from "react";

const Recipe = (({name, recipe_id}) => {

  return (
    <>
      <div className="w-1/2 flex flex-col justify-start items-center bg-theme-blue rounded-lg text-white">
        <strong className="mt-2 text-3xl font-semibold">{name}</strong>
        <p className="">Prep: 15 mins | Cook: 20 mins</p>
        <div className="mx-6 my-2 border-black border-2 rounded-lg overflow-hidden m-0">
          <img src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" alt="" />
        </div>
        <div className="w-full flex flex-row justify-start items-start px-8 py-4">
          <div>
            <p>{name + " Ingredients:"}</p>
            <ul className="pl-6">
              <li>Cheese</li>
              <li>Dough</li>
              <li>Sauce</li>
              <li>Pepperoni</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );

});

export { Recipe };
