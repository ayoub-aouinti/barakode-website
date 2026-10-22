import './i18n/config';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Products from './components/sections/Products';
import References from './components/sections/References';
import Process from './components/sections/Process';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <References />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
