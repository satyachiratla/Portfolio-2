import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Profile />
        <AboutMe />
        <Projects />
      </main>
      <footer>
        <Contact />
      </footer>
    </React.Fragment>
  );
}

export default App;
