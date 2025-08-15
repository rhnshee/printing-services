import { Facebook, Instagram, Phone, Mail, Clock, MapPin, Play } from "lucide-react" // used Play for TikTok placeholder
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contact-hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-200"
          >
            Quality signage, tarpaulins, and printing services — let’s make your brand stand out.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section -mt-16 relative z-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          
          {/* Left Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="section-title">Get a Quote</h2>
            <p className="section-sub">
              Tell us what you need printed — size, quantity, material, and deadline.
            </p>

            <form className="mt-6 space-y-4">
              {/* Name */}
              <input
                type="text"
                className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Name"
                required
              />

              {/* Email */}
              <input
                type="email"
                className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Email"
                required
              />

              {/* Project Type */}
              <select
                className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              >
                <option value="">Select Project Type</option>
                <option value="business-cards">Business Cards</option>
                <option value="flyers">Flyers</option>
                <option value="posters">Posters</option>
                <option value="packaging">Custom Packaging</option>
                <option value="signage">Signage / Large Format</option>
                <option value="others">Others</option>
              </select>

              {/* Quantity */}
              <input
                type="number"
                className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Quantity"
                min="1"
                required
              />

              {/* File Upload */}
              <input
                type="file"
                className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/50 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/80"
              />

              {/* Deadline */}
              <input
                type="date"
                className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />

              {/* Message */}
              <textarea
                className="w-full border rounded-xl p-3 h-28 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Message / Project details"
              />

              {/* Submit Button */}
              <button type="submit" className="btn-primary w-full">
                Send Request
              </button>
            </form>

            {/* Instant Quote via Chat */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-500">Need a faster reply?</p>
              <a
                href="#"
                onClick={() => window.Tawk_API?.maximize?.()}
                className="text-primary font-semibold hover:underline"
              >
                Chat with us instantly
              </a>
            </div>
          </div>

          {/* Right Column - Contact Details */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
            <div className="card space-y-4">
              {/* Office Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <p className="text-gray-700">
                  Jhamsher Printing Services, Kasunduan Commonwealth, Quezon City
                  <br />
                  (Jerry and Siony Store Landmark)
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <p className="text-gray-700">
                  09638080443 • 09618487218 (Viber) <br />
                  09693005575 (Ms. Charro Duterte)
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <p className="text-gray-700">duterteadvertising@gmail.com</p>
              </div>

              {/* Operating Hours */}
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <p className="text-gray-700">Mon – Sat: 9:00 AM – 6:00 PM</p>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://facebook.com/profile.php?id=61557569998287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition"
                >
                  <Play className="w-6 h-6" /> {/* placeholder for TikTok */}
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-6 rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.0000000000005!2d121.02700000000001!3d14.630000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c117fdeadbeef%3A0x123456789abcdef!2sJhamsher%20Printing%20Services%2C%20Kasunduan%20Commonwealth%2C%20Quezon%20City!5e0!3m2!1sen!2sph!4v1697800000000!5m2!1sen!2sph"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
