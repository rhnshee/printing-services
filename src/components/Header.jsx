import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const NavItem = ({ to, children }) => (
    <NavLink 
        to={to} 
        className={({ isActive }) => 
          `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out relative ${
            isActive 
              ? (scrolled 
                  ? 'text-primary hover:underline hover:underline-offset-4 hover:decoration-[#38BDF8]' 
                  : 'text-blue-500 hover:text-[#38BDF8] hover:underline hover:underline-offset-4 hover:decoration-[#38BDF8]'
                )
              : (scrolled 
                  ? 'text-gray-700 hover:text-primary hover:underline hover:underline-offset-4 hover:decoration-[#38BDF8]' 
                  : 'text-white hover:text-[#38BDF8] hover:underline hover:underline-offset-4 hover:decoration-[#38BDF8]'
                )
          } ${
            !isActive && 'transform hover:scale-[1.03] active:scale-[0.98]'
          }`
        }
      >
        {children}
    </NavLink>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      scrolled ? 'bg-white/95 shadow-sm backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className={`mx-auto transition-all duration-500 ease-out ${
        scrolled ? 'max-w-full px-6' : 'max-w-4xl rounded-t-[40px] rounded-b-[40px] bg-white/10 backdrop-blur-lg px-8 mt-4'
      }`}>
        <motion.div 
          className="flex items-center justify-between py-3"
          initial={false}
          animate={{
            paddingTop: scrolled ? '0.75rem' : '1rem',
            paddingBottom: scrolled ? '0.75rem' : '1rem'
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div 
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                scrolled ? 'gradient-bg' : 'bg-white/30 backdrop-blur-sm'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-white font-bold">D</span>
            </motion.div>
            <div className="flex flex-col">
              <motion.h1 
                className={`text-xl font-extrabold transition-colors duration-300 ${
                  scrolled ? 'text-gradient' : 'text-primary'
                }`}
                whileHover={{ x: 2 }}
              >
                Duterte
              </motion.h1>
              <p className={`text-xs transition-colors duration-300 ${
                scrolled ? 'text-gray-600' : 'text-white/80'
              } mt-1`}>
                Advertising & Printing Services
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/services">Services</NavItem>
            <NavItem to="/portfolio">Portfolio</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className={`ml-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  scrolled 
                    ? 'bg-primary text-white hover:bg-primary/90 shadow-md' 
                    : 'bg-white text-gray/90 hover:bg-white/90 shadow-sm'
                }`}
              >
                Get Quote
              </Link>
            </motion.div>
          </nav>

          <button 
            onClick={() => setOpen(!open)} 
            className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </header>
  );
}