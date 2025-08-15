import { motion } from 'framer-motion'

export default function ServiceCard({ icon: Icon, title, desc }){
  return (
    <motion.div whileHover={{ y:-6 }} className="card">
      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
        {Icon ? <Icon className="text-white" /> : <span className="text-white font-bold">★</span>}
      </div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  )
}