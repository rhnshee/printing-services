import { motion } from "framer-motion"
import { Printer, Image as ImageIcon, PenTool, Package, Scissors, Hammer } from "lucide-react"
import ServiceCard from "../components/ServiceCard.jsx"

export default function Services() {
  const services = [
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Digital & Offset Printing",
      desc: "Cards, brochures, catalogs, posters, letterheads, envelopes, and more.",
      photo: "/images/service-printing.png",
      turnaround: "2–5 business days",
    },
    {
      icon: <ImageIcon className="w-8 h-8" />,
      title: "Large Format & Signage",
      desc: "Tarp, billboards, standees, acrylic signs, lightboxes, wall murals.",
      photo: "/images/pic6.jpg",
      turnaround: "3–7 business days",
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Graphic Design",
      desc: "Logos, layouts, rebranding, and packaging design with print-ready files.",
      photo: "/images/pic15.jpg",
      turnaround: "1–3 business days",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Custom Packaging",
      desc: "Product boxes, mailing boxes, labels, shrink sleeves, stickers.",
      photo: "/images/pic9.jpg",
      turnaround: "5–10 business days",
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Finishing",
      desc: "Lamination (gloss/matte/soft-touch), spot UV, emboss/deboss, foiling.",
      photo: "/images/service-finishing.png",
      turnaround: "2–4 business days",
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Installation",
      desc: "On-site signage and large format installations within Metro Manila.",
      photo: "/images/pic13.jpg",
      turnaround: "By appointment",
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services-hero.png')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Our Printing Services</h1>
          <p className="text-lg text-gray-200">
            From design to print to installation — we bring your brand to life with speed, quality, and creativity.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title text-center">What We Do</h2>
        <p className="section-sub text-center max-w-2xl mx-auto">
          Explore our full capabilities — whether it’s small runs, large formats, or custom packaging, we’ve got you covered.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}
