import React from 'react';
import GlobalStyle from './elements/GlobalStyle';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return(
    <div>
      <GlobalStyle />
        <Navigation />
        <Home />
        <About />
        <Project />
        <Skills />
        <Contact />
        <Footer />
    </div>     
  );
}

export default App;