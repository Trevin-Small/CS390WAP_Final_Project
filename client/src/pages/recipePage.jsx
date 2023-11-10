import { Recipe } from '../components/recipe';

const RecipePage = (({}) => {

  return (
    <>
      <Recipe
      recipe={
        {
          name: "Pizza",
          img: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
          prep_time: "15 min",
          cook_time: "15 min",
          total_time: "15 min",
          servings: "4",
          ingredients: [
            "Dough",
            "Sauce",
            "Cheese",
            "Toppings"
          ],
          instructions: [
            "Roll out dough",
            "Put sauce on dough",
            "Put cheese on dough",
            "Put toppings on cheese",
            "Bake at 350F for 20 mins"
          ]
        }
      } />
    </>
  );

});

export { RecipePage };