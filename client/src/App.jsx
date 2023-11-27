import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient, useQuery } from '@tanstack/react-query'
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { RecipeList } from "./pages/recipeList";
import { RecipePage } from "./pages/recipePage";
import { AddRecipe } from "./pages/addRecipe";
import { Error } from "./pages/error";
import { getAllRecipes } from './api/api';

const queryClient = new QueryClient();

const Page = (() => {
  const query = useQuery({queryKey: ['recipeList'], queryFn: getAllRecipes})

  return (
    <>
      <Nav />
        <section id="main-content" className="w-full flex flex-col justify-start items-center gap-y-4 p-6" style={{'minHeight': "85vh"}}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/recipes" element={<RecipeList data={query.data || []} />} />
            <Route path="/recipe" element={<RecipePage data={query.data || []} />} />
            <Route path="/newrecipe" element={<AddRecipe/>} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </section>
      <Footer />
    </>
  );

});

const App = (() => {

  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Page />
    </QueryClientProvider>
  );

});

export { App };
