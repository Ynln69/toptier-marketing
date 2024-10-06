import About from "components/About/About";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import Partnerships from "components/Partnerships/Partnerships";
import Technologies from "components/Technologies/Technologies";
import Vacancies from "components/Vacancies/Vacancies";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Partnerships />
        <Vacancies />
      </main>
      <Footer />
    </>
  );
};

export default App;
