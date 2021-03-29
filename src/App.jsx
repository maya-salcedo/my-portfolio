import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return(
    <div>
      <Navigation />
      <Home />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>     
  );
}

export default App;