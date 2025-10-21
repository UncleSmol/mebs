import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Homepage from './pages/Homepage';
import Info from './pages/Info';
import Services from './pages/Services';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './components/NotFound';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/info" element={<Info />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;