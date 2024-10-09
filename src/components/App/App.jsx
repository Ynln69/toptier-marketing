import React, { useState, useRef } from 'react';

import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Partnerships from '../Partnerships/Partnerships';
import Technologies from '../Technologies/Technologies';
import Vacancies from '../Vacancies/Vacancies';
import Modal from '../Modal/Modal';
import ContactsForm from '../ContactsForm/ContactsForm';

const App = () => {
  const [isFormVisible, setFormVisible] = useState(false);

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

  const handleOpenForm = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  return (
    <>
      <Header onOpenForm={handleOpenForm} scrollToSection={scrollToSection} />
      <main>
        <Hero />
        <About setRef={setRef} />
        <Technologies setRef={setRef} />
        <Partnerships setRef={setRef} />
        <Vacancies setRef={setRef} />
      </main>
      <Footer setRef={setRef} />
      {isFormVisible && (
        <Modal onClose={handleCloseForm}>
          <ContactsForm />
        </Modal>
      )}
    </>
  );
};

export default App;
