import Nav from "./components/Nav/Nav.jsx";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Skills from "./components/Skills/Skills.jsx";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About.jsx";
import Work from "./components/Work/Work.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <div className="font-outfit">
      <Nav />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
