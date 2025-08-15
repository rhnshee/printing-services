export default function Portfolio(){
  const items = Array.from({length:9}, (_,i)=>({id:i+1, title:`Project ${i+1}`}))
  return (
    <section className="section">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">Portfolio</h2>
        <p className="section-sub">A peek at our recent work in print, packaging, and signage.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {items.map(item=> (
            <figure key={item.id} className="overflow-hidden rounded-2xl border bg-white shadow-sm">
              <div className="h-48 w-full gradient-bg" />
              <figcaption className="p-4 text-sm text-gray-700">{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}