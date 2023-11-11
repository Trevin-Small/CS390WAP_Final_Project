import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { RecipeList } from "./pages/recipeList";
import { RecipePage } from "./pages/recipePage";
import { Error } from "./pages/error";
import { useGetAllRecipes } from './api/api';

const App = (() => {
  const [recipes, setRecipes] = useState({});

  const queryClient = new QueryClient();

  useGetAllRecipes({
    onSuccess: (result) => {
      setRecipes(result);
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );

});

export { App };