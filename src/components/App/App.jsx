import React, { useState } from 'react';

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

  const handleOpenForm = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };
  return (
    <>
      <Header onOpenForm={handleOpenForm} />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Partnerships />
        <Vacancies />
      </main>
      <Footer />
      {isFormVisible && (
        <Modal onClose={handleCloseForm}>
          <ContactsForm />
        </Modal>
      )}
    </>
  );
};

export default App;
