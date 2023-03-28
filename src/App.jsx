import Nav from "./components/Nav/Nav.jsx"
import Portfolios from "./components/Portfolios/Portfolios.jsx"
import Home from "./components/Home/Home.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Skills from "./components/Skills/Skills.jsx"
function App() {

  return (
    <div className="grid grid-rows-[auto,auto,auto,auto,auto]">
      <Nav/>
      <Home/>
      <Portfolios />
      <Skills />
      <Contact />

    </div>
  )
}

export default App
