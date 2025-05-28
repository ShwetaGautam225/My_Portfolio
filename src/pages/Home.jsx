import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <main className="bg-black pt-18">
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
    </main>
  );
};

export default Home;
