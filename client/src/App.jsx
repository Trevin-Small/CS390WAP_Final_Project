import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { RecipeList } from "./pages/recipeList";
import { RecipePage } from "./pages/recipePage";
import { Error } from "./pages/error";
import { API } from './api/api';

const App = (() => {
  const [recipes, set_recipes] = useState({});

  useEffect(() => {
    set_recipes(API.get_all_recipes().then((recipes) => { return recipes}));
  }, []);

  return (
    <>
      <Nav />
        <section id="main-content" className="w-full flex flex-col justify-start items-center gap-y-4 p-6" style={{'minHeight': "85vh"}}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/recipes" element={<RecipeList data={recipes} />} />
            <Route path="/recipe" element={<RecipePage data={recipes} />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </section>
      <Footer />
    </>
  );

});

export { App };