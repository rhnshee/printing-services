export default function Contact(){
  return (
    <section className="section">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="section-title">Get a Quote</h2>
          <p className="section-sub">Tell us what you need printed — size, quantity, paper/stock, and deadline.</p>
          <form className="mt-6 space-y-4">
            <input className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Name" />
            <input className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Email" />
            <input className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Phone" />
            <textarea className="w-full border rounded-xl p-3 h-28 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Project details"></textarea>
            <button type="button" className="btn-primary">Send Request</button>
          </form>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
          <div className="card">
            <p className="text-gray-700">Makati City, Metro Manila</p>
            <p className="text-gray-700">(+63) 900 000 0000</p>
            <p className="text-gray-700">hello@printcraft.ph</p>
            <div className="mt-4 h-56 w-full rounded-xl bg-gray-100 flex items-center justify-center text-gray-500">Map Placeholder</div>
          </div>
        </div>
      </div>
    </section>
  )
}