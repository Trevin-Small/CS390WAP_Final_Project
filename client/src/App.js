import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";

const App = (() => {

  return (
    <>
      <Layout>
        <section id="main-content" style={{'minHeight': "85vh"}}>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </section>
      </Layout>
    </>
  );
});


const Layout = (({children}) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
});

export { App };