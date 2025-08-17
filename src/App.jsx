import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Blog from './pages/Blog.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import FloatingChat from './components/FloatingChat.jsx'; // ✅ import the chat component
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import FloatingChat from './components/FloatingChat.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>

      <Footer />

      {/* Floating Chat Icons */}
      <FloatingChat />
      <FloatingChat />

      {/* Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
}
