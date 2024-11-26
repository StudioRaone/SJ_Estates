import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'react-toastify/dist/ReactToastify.min.css';

import Footer from './components/Footer';
import Header from './components/Header';
import FeaturesSection from './components/Features';
import Properties from './components/Properties';
import About from './components/About';
import Description from './components/Description';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div>
      <Header />
      <section id="description">
        <Description />
      </section>
      <section id="portfolio">
        <FeaturesSection />
      </section>
      <hr className='style-four' style={{marginTop: "5%"}}/>
      <section id="objective">
        <Properties />
      </section>
      <section id="about">
        <About />
      </section>
      <hr className='style-four' style={{marginTop: "5%"}}/>
      <section id="contact-form">
        <ContactForm />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
