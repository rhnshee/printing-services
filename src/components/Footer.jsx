import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return

    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        { user_email: email },
        "your_public_key"
      )
      .then(
        () => {
          setStatus("✅ Subscription successful!")
          setEmail("")
        },
        () => {
          setStatus("❌ Failed to subscribe. Please try again.")
        }
      )
  }

  return (
    <footer className="mt-20 bg-blue-950 text-blue-100 py-10">
      {/* Top Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10 items-start text-center md:text-left">
        
        {/* Brand Logo Section */}
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <motion.div 
            className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-white font-bold">D</span>
          </motion.div>

          <div className="flex flex-col text-left">
            <motion.h1 
              className="text-xl font-extrabold text-white"
              whileHover={{ x: 2 }}
            >
              Duterte
            </motion.h1>
            <p className="text-xs text-white/80 mt-1">
              Advertising & Printing Services
            </p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Services</h4>
          <ul className="space-y-1 text-blue-200">
            <li>Digital & Offset Printing</li>
            <li>Large Format & Signage</li>
            <li>Graphic Design</li>
            <li>Custom Packaging</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-1 text-blue-200">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Contact</h4>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <MapPin className="w-4 h-4 text-blue-400" /> Kasunduan Commonwealth, Quezon City
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <Phone className="w-4 h-4 text-blue-400" /> (+63) 969 300 5575 (Ms. Charro Duterte)
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <Mail className="w-4 h-4 text-blue-400" /> duterteadvertising@gmail.com
          </p>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="max-w-xl mx-auto text-center mt-6 px-6">
        <h4 className="font-semibold mb-2 text-white">Stay Updated</h4>
        <p className="text-blue-300 mb-4">
          Subscribe to our newsletter for the latest deals & updates.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 border border-blue-700 bg-white-900 text-gray-100 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="px-5 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition"
          >
            Subscribe
          </button>
        </form>
        {status && <p className="mt-3 text-sm text-blue-300">{status}</p>}

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6 mb-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 hover:text-blue-400 transform hover:scale-110 transition duration-300"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 hover:text-pink-400 transform hover:scale-110 transition duration-300"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-gray-400 text-sm pt-6 border-t border-white/20">
        © {new Date().getFullYear()} Duterte Advertising & Printing Services. All rights reserved.
      </div>
    </footer>
  )
}
