export default function Footer(){
  return (
    <footer className="mt-20 border-t">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2">PrintCraft</h3>
          <p className="text-gray-600">Quality printing, signage, and packaging — delivered fast.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="text-gray-600 space-y-1">
            <li>Digital & Offset Printing</li>
            <li>Large Format & Signage</li>
            <li>Graphic Design</li>
            <li>Custom Packaging</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-gray-600">Makati, Metro Manila</p>
          <p className="text-gray-600">(+63) 900 000 0000</p>
          <p className="text-gray-600">hello@printcraft.ph</p>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm pb-8">© {new Date().getFullYear()} PrintCraft. All rights reserved.</div>
    </footer>
  )
}
