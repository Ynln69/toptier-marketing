import React, { useState, useRef } from 'react';

import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Partnerships from '../Partnerships/Partnerships';
import Technologies from '../Technologies/Technologies';
import Vacancies from '../Vacancies/Vacancies';
import ContactForm from '../ContactForm/ContactForm';
import Modal from '../Modal/Modal';

const App = () => {
  const sectionsRef = useRef({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

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
      <Header scrollToSection={scrollToSection} onApplyClick={handleApplyClick}/>
      <main>
        <Hero />
        <About setRef={setRef} />
        <Technologies setRef={setRef} />
        <Partnerships setRef={setRef} />
        <Vacancies setRef={setRef} onApplyClick={handleApplyClick}/>
      </main>
      <Footer setRef={setRef} onApplyClick={handleApplyClick}/>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h2>Your Message</h2>
          <ContactForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default App;
