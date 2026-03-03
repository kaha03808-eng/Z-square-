import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ArchitecturalHighlights from './components/ArchitecturalHighlights';
import StoresAndBrands from './components/StoresAndBrands';
import DiningAndEntertainment from './components/DiningAndEntertainment';
import VisitorServices from './components/VisitorServices';
import Timings from './components/Timings';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy-deep">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ArchitecturalHighlights />
        <StoresAndBrands />
        <DiningAndEntertainment />
        <VisitorServices />
        <Timings />
      </main>
      <Footer />
    </div>
  );
}

export default App;
