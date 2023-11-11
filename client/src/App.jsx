import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { RecipeList } from "./pages/recipeList";
import { RecipePage } from "./pages/recipePage";
import { Error } from "./pages/error";
import { data } from './recipes';

const App = (() => {

  return (
    <>
      <Nav />
        <section id="main-content" className="w-full flex flex-col justify-start items-center gap-y-4 p-6" style={{'minHeight': "85vh"}}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/recipes" element={<RecipeList data={data} />} />
            <Route path="/recipe" element={<RecipePage />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </section>
      <Footer />
    </>
  );

});

export { App };