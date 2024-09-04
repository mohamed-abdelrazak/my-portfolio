import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from './components/Skills/Skills';
import Contact from "./components/Contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
