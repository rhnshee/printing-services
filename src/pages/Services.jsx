import ServiceCard from '../components/ServiceCard.jsx'
import { Printer, Image as ImageIcon, PenTool, Package } from 'lucide-react'

export default function Services(){
  return (
    <section className="section">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">What We Do</h2>
        <p className="section-sub">From small runs to large format and custom packaging, we’ve got you covered.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <ServiceCard icon={Printer} title="Digital & Offset Printing" desc="Cards, brochures, catalogs, posters, letterheads, envelopes, and more." />
          <ServiceCard icon={ImageIcon} title="Large Format & Signage" desc="Tarp, billboards, standees, acrylic signs, lightboxes, wall murals." />
          <ServiceCard icon={PenTool} title="Graphic Design" desc="Logos, layouts, rebranding, and packaging design with print-ready files." />
          <ServiceCard icon={Package} title="Custom Packaging" desc="Product boxes, mailing boxes, labels, shrink sleeves, stickers." />
          <ServiceCard title="Finishing" desc="Lamination (gloss/matte/soft-touch), spot UV, emboss/deboss, foiling." />
          <ServiceCard title="Installation" desc="On-site signage and large format installations within Metro Manila." />
        </div>
      </div>
    </section>
  )
}
