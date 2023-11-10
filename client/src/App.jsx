import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { RecipeList } from "./pages/recipeList";
import { RecipePage } from "./pages/recipePage";
import { data } from './recipes';

const App = (() => {

  return (
    <>
      <Layout>
        <section id="main-content" className="w-full flex flex-col justify-start items-center gap-y-4 p-6" style={{'minHeight': "85vh"}}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipes" element={<RecipeList data={data} />} />
            <Route path="/recipe" element={<RecipePage />} />
          </Routes>
        </section>
      </Layout>
    </>
  );
});


const Layout = (({children}) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
});

export { App };