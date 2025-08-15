import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function Portfolio() {
  const [filter, setFilter] = useState("All")
  const [selected, setSelected] = useState(null)
  const [visibleCount, setVisibleCount] = useState(6) // show first 6

  const items = [
    { id: 1, title: "Business Card for Cafe", category: "Business Cards", client: "Cafe Aroma", type: "Digital Print", materials: "Matte 300gsm", image: "/images/pic4.jpg" },
    { id: 2, title: "Outdoor Billboard", category: "Signage", client: "Tech Expo", type: "Large Format", materials: "Tarp + Steel Frame", image: "/images/pic2.jpg" },
    { id: 3, title: "Tarpaulin Birthday Banner", category: "Tarpaulin", client: "Private Event", type: "Tarp Print", materials: "13oz Tarpaulin", image: "/images/portfolio3.jpg" },
    { id: 4, title: "Corporate Brochure", category: "Business Cards", client: "FinTech Co.", type: "Offset Print", materials: "Gloss 250gsm", image: "/images/portfolio4.jpg" },
    { id: 5, title: "Storefront Lightbox", category: "Signage", client: "Boutique Shop", type: "Acrylic + LED", materials: "Acrylic + LED", image: "/images/portfolio5.jpg" },
    { id: 6, title: "Product Packaging Box", category: "Business Cards", client: "Organic Skincare", type: "Custom Packaging", materials: "Rigid Board + Foil", image: "/images/pic9.jpg" },
    { id: 7, title: "Wall Mural Design", category: "Signage", client: "Creative Studio", type: "Vinyl Print", materials: "Adhesive Vinyl", image: "/images/portfolio7.jpg" },
    { id: 8, title: "Event Backdrop", category: "Tarpaulin", client: "Wedding Event", type: "Large Format", materials: "Tarp 13oz", image: "/images/pic10.jpg" },
    { id: 9, title: "Custom Label Stickers", category: "Business Cards", client: "Food Brand", type: "Sticker Printing", materials: "Gloss Paper", image: "/images/portfolio9.jpg" },
  ]

  const categories = ["All", "Signage", "Tarpaulin", "Business Cards"]

  const filtered = filter === "All" ? items : items.filter(item => item.category === filter)
  const visibleItems = filtered.slice(0, visibleCount)

  return (
    <>
      {/* Hero */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/portfolio-hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-200"
          >
            Visual proof of our quality — from signage to business cards, see how we bring brands to life.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">Our Work</h2>
          <p className="section-sub mb-8">A peek at our recent projects in print, packaging, and signage.</p>

          {/* Filters */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat)
                  setVisibleCount(6) // reset visible count on filter change
                }}
                className={`px-5 py-2 rounded-full border transition ${
                  filter === cat ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {visibleItems.map(item => (
              <motion.figure
                key={item.id}
                layout
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-2xl border bg-white shadow-sm cursor-pointer"
                onClick={() => setSelected(item)}
              >
                <img src={item.image} alt={item.title} className="h-48 w-full object-cover transition-transform duration-500 hover:scale-110" />
                <figcaption className="p-4 text-sm text-gray-700 font-medium">{item.title}</figcaption>
              </motion.figure>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filtered.length && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setVisibleCount(prev => prev + 3)}
                className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-2xl shadow-lg max-w-3xl w-full overflow-hidden"
            >
              <div className="relative">
                <img src={selected.image} alt={selected.title} className="w-full h-80 object-cover" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-full hover:bg-black transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selected.title}</h3>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Client:</span> {selected.client}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Type:</span> {selected.type}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Materials:</span> {selected.materials}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
