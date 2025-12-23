import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Strengths from './components/Strengths';
import Direction from './components/Direction';
import Projects from './components/Projects';
import Footer from './components/Footer';
import BingoProject from './components/BingoProject';
import PardSnsProject from './components/PardSnsProject';
import MuknanProject from './components/MuknanProject';

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash;
      setCurrentHash(newHash);

      // If returning to main page (empty hash or root hash)
      if (newHash === '' || newHash === '#/') {
        const savedScrollY = sessionStorage.getItem('mainScrollY');
        if (savedScrollY) {
          // Restore scroll position after a short delay to ensure rendering
          setTimeout(() => {
            window.scrollTo(0, parseInt(savedScrollY, 10));
          }, 0);
          sessionStorage.removeItem('mainScrollY'); // Clean up
        } else {
          window.scrollTo(0, 0);
        }
      } else {
        // Navigating to a project page -> scroll to top
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentHash === '#/project-bingo') {
    return (
      <>
        <CustomCursor />
        <BingoProject />
      </>
    );
  }

  if (currentHash === '#/project-pard') {
    return (
      <>
        <CustomCursor />
        <PardSnsProject />
      </>
    );
  }

  if (currentHash === '#/project-muknan') {
    return (
      <>
        <CustomCursor />
        <MuknanProject />
      </>
    );
  }

  return (
    <>
      <CustomCursor />
      <Hero />
      <About />
      <Strengths />
      <Direction />
      <Projects />
      <Footer />
    </>
  );
};

export default App;