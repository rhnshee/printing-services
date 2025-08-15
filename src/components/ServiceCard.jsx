import { motion } from "framer-motion"

export default function ServiceCard({
  icon,
  title,
  desc,
  photo,
  turnaround,
  ctaPrimary = "Order Now",
  ctaSecondary = "Request Quote",
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white border rounded-2xl shadow-md hover:shadow-xl overflow-hidden flex flex-col"
    >
      {/* Image Wrapper with Hover */}
      {photo && (
        <div className="relative group h-40 w-full overflow-hidden">
          <img
            src={photo}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">View More</span>
          </div>
        </div>
      )}

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Icon + Title */}
        <div className="flex items-center gap-3 mb-4">
          {icon && <div className="text-blue-600 w-10 h-10">{icon}</div>}
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 flex-1">{desc}</p>

        {/* Turnaround */}
        {turnaround && (
          <p className="text-sm text-gray-500 mb-6">
            <span className="font-semibold">Turnaround:</span> {turnaround}
          </p>
        )}

        {/* CTA buttons */}
        <div className="flex gap-3 mt-auto">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            {ctaPrimary}
          </button>
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
            {ctaSecondary}
          </button>
        </div>
      </div>
    </motion.div>
  )
}
