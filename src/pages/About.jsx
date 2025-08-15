import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Image Section */}
      <div className="relative h-96 w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Duterte Printing Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 flex items-center justify-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
              Duterte Advertising & Printing
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Quality and affordable signage solutions to make your business
              stand out.
            </p>
          </motion.div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Title & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-extrabold text-blue-800 mb-4">
              About Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Building brands that stand out through creative and affordable printing & signage solutions.
            </p>
          </motion.div>

          {/* Story & Mission */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="/images/team-working.png"
                alt="Our Team at Work"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Our Story
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Since our founding in Quezon City, <strong>Duterte Advertising & Printing</strong> has 
                been dedicated to helping businesses shine with high-quality, creative, and affordable 
                printing solutions. From custom signage to vibrant banners, we make sure your brand 
                gets noticed.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our team blends craftsmanship with modern technology, delivering projects that 
                reflect your brand’s identity with precision and creativity.
              </p>
            </motion.div>
          </div>

          {/* Mission, Values, and Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
              <h4 className="text-lg font-semibold text-blue-700 mb-3">Our Mission</h4>
              <p className="text-gray-700">
                To empower brands with designs and print materials that inspire trust, attract attention, 
                and leave a lasting impact.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
              <h4 className="text-lg font-semibold text-blue-700 mb-3">Our Values</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Creativity & Innovation</li>
                <li>Customer-First Approach</li>
                <li>Affordability & Quality</li>
                <li>Reliability & Transparency</li>
              </ul>
            </div>
          </motion.div>

          {/* Meet Our Team Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              
              {/* Section Title */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-14"
              >
                <h2 className="text-4xl font-extrabold text-blue-800 mb-4">
                  Meet Our Team
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  The people behind Duterte Advertising & Printing’s success — combining creativity, 
                  skill, and dedication to deliver exceptional results.
                </p>
              </motion.div>

              {/* Team Members */}
              <div className="grid md:grid-cols-3 gap-12">
                
                {/* Member 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition"
                >
                  <img
                    src="/images/member1.jpg"
                    alt="Charro Duterte"
                    className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-blue-200 mb-4"
                  />
                  <h4 className="text-xl font-semibold text-blue-700">Charro Duterte</h4>
                  <p className="text-gray-500 text-sm mb-3">Founder & CEO</p>
                  <p className="text-gray-700 text-sm">
                    Visionary leader with a passion for design and business growth, ensuring our 
                    services exceed client expectations.
                  </p>
                </motion.div>

                {/* Member 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition"
                >
                  <img
                    src="/images/member2.jpg"
                    alt="Maria Santos"
                    className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-blue-200 mb-4"
                  />
                  <h4 className="text-xl font-semibold text-blue-700">Maria Santos</h4>
                  <p className="text-gray-500 text-sm mb-3">Creative Director</p>
                  <p className="text-gray-700 text-sm">
                    Skilled in branding and visual storytelling, Maria ensures every project reflects 
                    our clients’ unique identities.
                  </p>
                </motion.div>

                {/* Member 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition"
                >
                  <img
                    src="/images/member3.jpg"
                    alt="John Reyes"
                    className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-blue-200 mb-4"
                  />
                  <h4 className="text-xl font-semibold text-blue-700">John Reyes</h4>
                  <p className="text-gray-500 text-sm mb-3">Production Manager</p>
                  <p className="text-gray-700 text-sm">
                    Oversees the printing and signage process, ensuring top-notch quality and timely 
                    delivery for all client projects.
                  </p>
                </motion.div>

              </div>
            </div>
          </section>

          {/* Milestones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-blue-100 to-white rounded-2xl shadow-lg p-10 mb-20"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">Our Journey</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-xl font-bold text-blue-800">2018</h4>
                <p className="text-gray-700">Started as a small signage shop in Quezon City.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-800">2020</h4>
                <p className="text-gray-700">Expanded into large-format and digital printing services.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-800">2023+</h4>
                <p className="text-gray-700">Proudly served over 500 satisfied clients nationwide.</p>
              </div>
            </div>
          </motion.div>

          {/* Clients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Clients & Brands We’ve Served
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              From local entrepreneurs to established companies, we are proud to be part of 
              their brand journey.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <img src="/images/client 1.png" alt="Client Logo" className="h-12" />
              <img src="/images/client2.png" alt="Client Logo" className="h-12" />
              <img src="/images/client 3.png" alt="Client Logo" className="h-12" />
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
