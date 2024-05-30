import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="">
      <Header />
      <div className="">
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
