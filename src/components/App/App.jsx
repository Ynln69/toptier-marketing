import React, { useRef } from 'react';

import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Partnerships from '../Partnerships/Partnerships';
import Technologies from '../Technologies/Technologies';
import Vacancies from '../Vacancies/Vacancies';

const App = () => {
  const sectionsRef = useRef({});

  const setRef = (name, ref) => {
    sectionsRef.current[name] = ref;
  };

  const scrollToSection = section => {
    const targetRef = sectionsRef.current[section];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <main>
        <Hero />
        <About setRef={setRef} />
        <Technologies setRef={setRef} />
        <Partnerships setRef={setRef} />
        <Vacancies setRef={setRef} />
      </main>
      <Footer setRef={setRef} />
    </>
  );
};

export default App;
