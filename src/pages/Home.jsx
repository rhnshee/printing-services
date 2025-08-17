import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard.jsx';
import { Printer, Image as ImageIcon, PenTool, Package } from 'lucide-react';
import Header from '../components/Header.jsx';
import heroImage1 from "../../public/images/pic.png";
import heroImage2 from "../../public/images/pic1.jpg";
import heroImage3 from "../../public/images/pic2.jpg";


const heroContent = [
  {
    image: '/images/pic.png',
    title: "Elevate Your Brand",
    subtitle: "Premium Printing",
    description: "From business cards to billboards — we deliver crisp colors, durable materials, and quick turnarounds."
  },
  {
    image: '/images/pic1.jpg',
    title: "Transform Your",
    subtitle: "Marketing Materials",
    description: "Eye-catching designs that make your brand stand out from the competition."
  },
  {
    image: '/images/pic2.jpg',
    title: "Professional",
    subtitle: "Packaging Solutions",
    description: "Custom packaging that protects your products and enhances your brand image."
  }
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [heroImage1, heroImage2, heroImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Add a motion-enabled Link and a wave variant
  const MotionLink = motion(Link);
  const waveVariant = {
    initial: { x: "-100%" },
    hover: {
      x: "0%",
      transition: {
        duration: 1.5,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };
  
  return (
    <div className="relative">
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] pt-20">
        {/* Background Slideshow - instant switch */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={images[currentImageIndex]} 
            alt={heroContent[currentImageIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-6 w-full text-left">
            
            {/* Heading Animation */}
            <motion.h1 
              key={`heading-${currentImageIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white whitespace-nowrap"
            >
              <span className="block">{heroContent[currentImageIndex].title}</span>
              <span className="block">{heroContent[currentImageIndex].subtitle}</span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p 
              key={`desc-${currentImageIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/80 mt-4 max-w-xl text-lg mr-auto"
            >
              {heroContent[currentImageIndex].description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              key={`buttons-${currentImageIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex gap-4 justify-left"
            >
              {/* Your existing button code here */}
              <Link
                to="/contact"
                className="px-6 py-3 rounded-full font-medium text-white"
                style={{
                  background: "linear-gradient(to bottom, #3b82f6, #2563eb)",
                  boxShadow: "0 4px 0 #1e40af"
                }}
              >
                Get a Quote
              </Link>
              <Link
                to="/portfolio"
                className="px-6 py-3 rounded-full font-medium text-white border-2 border-white/30"
              >
                View Portfolio
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              About Our <span className="text-blue-600">Company</span>
            </h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* 3D Image Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 bg-blue-600 rounded-2xl shadow-xl transform rotate-1 group-hover:rotate-3 transition-all duration-500"
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d"
                }}
              />
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-lg transform group-hover:-translate-y-2 transition-all duration-500"
                whileHover={{ scale: 1.02 }}
                style={{
                  transformStyle: "preserve-3d"
                }}
              >
                <img 
                  src="/images/pic17.jpg" 
                  alt="About us" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                className="absolute -left-8 -top-8 w-24 h-24 bg-blue-100 rounded-full opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="relative bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-100"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.h2 
                  className="text-3xl font-bold text-blue-900 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  About Our <span className="text-blue-600">Printing Services</span>
                </motion.h2>
                
                <motion.p 
                  className="text-gray-700 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  We've been providing high-quality printing solutions for over a decade, serving businesses of all sizes. 
                  From quick-turnaround digital prints to large-scale billboard campaigns, we ensure your brand looks its best.
                </motion.p>
                
                <motion.p 
                  className="text-gray-700"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Our team of designers, technicians, and customer service specialists work together to bring your vision to life — 
                  on time and within budget.
                </motion.p>

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to="/about" 
                    className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    Learn More About Us
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of your content */}
      <div className="bg-white"></div>

      {/* Services Preview - 3D Redesign */}
      <section className="section bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to look professional — in print and on site.
            </p>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Digital & Offset Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-2xl shadow-lg transform group-hover:rotate-3 transition-all duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl border-2 border-blue-200 shadow-md transform group-hover:-rotate-1 transition-all duration-300 h-full">
                <div className="w-14 h-14 mb-6 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:text-white group-hover:bg-blue-600 transition-colors duration-300">
                  <Printer size={28} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Digital & Offset</h3>
                <p className="text-blue-700/90">Business cards, brochures, flyers, NCR forms, and more.</p>
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>

            {/* Large Format Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-2xl shadow-lg transform group-hover:rotate-3 transition-all duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl border-2 border-blue-200 shadow-md transform group-hover:-rotate-1 transition-all duration-300 h-full">
                <div className="w-14 h-14 mb-6 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:text-white group-hover:bg-blue-600 transition-colors duration-300">
                  <ImageIcon size={28} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Large Format</h3>
                <p className="text-blue-700/90">Tarpaulins, billboards, backlit signs, and vehicle wraps.</p>
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>

            {/* Graphic Design Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-2xl shadow-lg transform group-hover:rotate-3 transition-all duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl border-2 border-blue-200 shadow-md transform group-hover:-rotate-1 transition-all duration-300 h-full">
                <div className="w-14 h-14 mb-6 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:text-white group-hover:bg-blue-600 transition-colors duration-300">
                  <PenTool size={28} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Graphic Design</h3>
                <p className="text-blue-700/90">Logo creation, layout, brand kits, and mockups.</p>
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>

            {/* Packaging Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-2xl shadow-lg transform group-hover:rotate-3 transition-all duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl border-2 border-blue-200 shadow-md transform group-hover:-rotate-1 transition-all duration-300 h-full">
                <div className="w-14 h-14 mb-6 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:text-white group-hover:bg-blue-600 transition-colors duration-300">
                  <Package size={28} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Packaging</h3>
                <p className="text-blue-700/90">Custom boxes, labels, sleeves, and stickers.</p>
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden relative w-full bg-gradient-to-r from-primary-dark via-primary to-primary-light py-3 shadow-lg">
        <div className="flex animate-marquee whitespace-nowrap text-white font-extrabold text-base sm:text-lg gap-8 sm:gap-12 perspective-500">
          <span className="animate-pulseSlow drop-shadow-lg transform rotate-1">
            50% DOWN PAYMENT AVAILABLE – Secure your order today!
          </span>
          <span className="animate-pulseSlow drop-shadow-lg transform -rotate-1">
            50% DOWN PAYMENT AVAILABLE – Start your printing project now!
          </span>
          <span className="animate-pulseSlow drop-shadow-lg transform rotate-2">
            50% DOWN PAYMENT AVAILABLE – High-quality prints made easy!
          </span>
          <span className="animate-pulseSlow drop-shadow-lg transform -rotate-2">
            50% DOWN PAYMENT AVAILABLE – Secure your order today!
          </span>
          <span className="animate-pulseSlow drop-shadow-lg transform rotate-1">
            50% DOWN PAYMENT AVAILABLE – Start your printing project now!
          </span>
        </div>
      </div>




      {/* PORTFOLIO PREVIEW */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-blue-600">Portfolio</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A glimpse into some of our favorite projects — blending creativity, quality, and precision.
            </p>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          {/* Portfolio Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "/images/pic8.jpg", title: "Business Cards", desc: "Premium matte finish with spot UV coating" },
              { img: "/images/pic3.jpg", title: "Product Packaging", desc: "Eco-friendly materials with custom die-cut" },
              { img: "/images/pic4.jpg", title: "Brochures", desc: "Tri-fold design with vibrant color printing" },
              { img: "/images/pic5.jpg", title: "Billboard", desc: "Large format printing for maximum impact" },
              { img: "/images/pic6.jpg", title: "Stationery", desc: "Full corporate identity package" },
              { img: "/images/pic7.jpg", title: "Event Banners", desc: "Durable vinyl with reinforced grommets" }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Shadow Layer */}
                <motion.div
                  className="absolute inset-0 bg-blue-600 rounded-xl shadow-lg transform rotate-1 group-hover:rotate-3 transition-all duration-500 z-0"
                />

                {/* Image Card */}
                <motion.div
                  className="relative overflow-hidden rounded-xl shadow-md transform group-hover:-translate-y-2 transition-all duration-500 h-full z-10"
                  whileHover={{ scale: 1.03 }}
                >
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/60 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <motion.h3 
                      className="text-white text-xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p 
                      className="text-blue-100 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                    >
                      {project.desc}
                    </motion.p>
                    <motion.div
                      className="mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-700"
                    >
                      <Link
                        to="/portfolio"
                        className="inline-block px-4 py-2 bg-white text-blue-600 text-sm font-medium rounded-full hover:bg-blue-50 transition-colors duration-300"
                      >
                        View Details
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              to="/portfolio"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Full Portfolio
            </Link>
          </motion.div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              What Our <span className="text-blue-600">Clients Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We value the trust our clients place in us — here’s what they have to say.
            </p>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Anna D.",
                text: "Fantastic service and top-notch print quality. Highly recommend!",
                role: "Marketing Director",
                img: "/images/client 1.png"
              },
              {
                name: "Mark S.",
                text: "They brought my vision to life with perfect colors and fast delivery.",
                role: "Creative Agency Owner",
                img: "/images/client2.png"
              },
              {
                name: "Liza P.",
                text: "Professional, reliable, and creative — exactly what my business needed.",
                role: "Small Business Owner",
                img: "/images/client 3.png"
              }
            ].map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100"
              >
                {/* Avatar */}
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-blue-100"
                />
                
                {/* Quote */}
                <p className="text-gray-600 italic mb-6 relative">
                  <span className="text-5xl text-blue-200 absolute -top-6 -left-2">“</span>
                  {t.text}
                  <span className="text-5xl text-blue-200 absolute -bottom-8 -right-2">”</span>
                </p>

                {/* Name & Role */}
                <h4 className="font-semibold text-gray-900 text-lg">{t.name}</h4>
                <p className="text-blue-500 text-sm">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">Ready to print something awesome?</h3>
          <p className="text-gray-600 mt-2">Tell us about your project — we’ll send a free, no-commitment quote.</p>
          <Link to="/contact" className="btn-primary mt-5 inline-block pulse-glow">Get a Free Quote</Link>
        </div>
      </section>
    </div>
  )
}
