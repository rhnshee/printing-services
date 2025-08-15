import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Lightbulb, Users, BadgeCheck, ShieldCheck } from "lucide-react";


function Timeline() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  if (inView) controls.start("visible");

  const milestones = [
    {
      year: "2018",
      title: "Humble Beginnings",
      desc: "Started as a small signage shop in Quezon City.",
    },
    {
      year: "2020",
      title: "Expansion",
      desc: "Expanded into large-format and digital printing services.",
    },
    {
      year: "2023+",
      title: "Nationwide Success",
      desc: "Proudly served over 500 satisfied clients nationwide.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Journey</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to serving hundreds of clients nationwide.
          </p>
        </motion.div>

        <div className="relative" ref={ref}>
          {/* Vertical line */}
          <motion.div
            initial={{ height: 0 }}
            animate={controls}
            variants={{ visible: { height: "100%" } }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200"
          />

          <div className="space-y-20">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0, transition: { delay: idx * 0.3 } },
                }}
                className="relative flex flex-col md:flex-row items-center w-full"
              >
                {/* Content here (desktop zigzag & mobile stacked) */}
                <div className={`hidden md:block md:w-1/2 ${idx % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                  {idx % 2 === 0 ? (
                    <div className="bg-blue-50 p-6 rounded-2xl shadow-lg inline-block relative">
                      <h4 className="text-xl font-bold text-blue-800 mb-2">{milestone.year}</h4>
                      <h5 className="text-blue-700 font-semibold mb-2">{milestone.title}</h5>
                      <p className="text-gray-700 text-sm">{milestone.desc}</p>
                    </div>
                  ) : null}
                </div>

                <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white z-10 relative shadow-lg" />

                <div className={`hidden md:block md:w-1/2 ${idx % 2 !== 0 ? "pl-12" : "pr-12"}`}>
                  {idx % 2 !== 0 ? (
                    <div className="bg-blue-50 p-6 rounded-2xl shadow-lg inline-block relative">
                      <h4 className="text-xl font-bold text-blue-800 mb-2">{milestone.year}</h4>
                      <h5 className="text-blue-700 font-semibold mb-2">{milestone.title}</h5>
                      <p className="text-gray-700 text-sm">{milestone.desc}</p>
                    </div>
                  ) : null}
                </div>

                {/* Mobile view */}
                <div className="md:hidden mt-6 w-full">
                  <div className="bg-blue-50 p-6 rounded-2xl shadow-lg w-full text-center relative">
                    <h4 className="text-xl font-bold text-blue-800 mb-2">{milestone.year}</h4>
                    <h5 className="text-blue-700 font-semibold mb-2">{milestone.title}</h5>
                    <p className="text-gray-700 text-sm">{milestone.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
                className="rounded-2xl shadow-lg border border-blue-100 object-cover max-h-96 w-full"
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

          {/* Mission, Values, and Meet Our Team Section */}
          <div className="bg-gradient-to-b from-white to-blue-50">

            {/* Mission Section */}
            <section className="py-20">
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Text */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Mission</h2>
                    <div className="w-20 h-1 bg-blue-600 mb-6 rounded-full"></div>
                    <p className="text-lg text-gray-700 mb-4">
                      To empower brands with high-quality designs and print materials that inspire trust, attract attention, and leave a lasting impression.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      We combine creativity with functionality — delivering solutions that not only look amazing but also work seamlessly to help businesses achieve their goals.
                    </p>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center"
                  >
                    <img
                      src="/images/mission-photo.png"
                      alt="Our Mission"
                      className="rounded-3xl shadow-xl border border-blue-100 object-cover max-h-96 w-full"
                    />
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-white">
              <div className="max-w-6xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Core Values</h2>
                  <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    The principles that guide every project, client interaction, and product we deliver.
                  </p>
                </motion.div>

                {/* Values Grid */}
                <motion.div
                  className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {[
                    {
                      icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
                      title: "Creativity & Innovation",
                      desc: "We push design boundaries to deliver unique, standout solutions."
                    },
                    {
                      icon: <Users className="w-12 h-12 text-blue-600" />,
                      title: "Customer-First",
                      desc: "Your satisfaction and goals are at the core of everything we do."
                    },
                    {
                      icon: <BadgeCheck className="w-12 h-12 text-blue-600" />,
                      title: "Quality & Affordability",
                      desc: "We balance premium quality with competitive pricing."
                    },
                    {
                      icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
                      title: "Transparency & Reliability",
                      desc: "We work with honesty, clarity, and dependable delivery."
                    }
                  ].map((value, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5, scale: 1.03 }}
                      className="bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-3xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300"
                    >
                      <div className="w-16 h-16 flex items-center justify-center mb-4">
                        {value.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-blue-700 mb-2">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>


            {/* Milestones / Timeline Section */}
            <Timeline />


            {/* Meet Our Team Section */}
            <section className="py-20 bg-blue-50">
              <div className="max-w-7xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-14"
                >
                  <h2 className="text-4xl font-extrabold text-blue-800 mb-4">Meet Our Team</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    The people behind Duterte Advertising & Printing’s success — combining creativity, skill, and dedication to deliver exceptional results.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12">
                  {[
                    {
                      name: "Charro Duterte",
                      role: "CEO",
                      image: "/images/member1.jpg",
                      desc: "Visionary leader with a passion for design and business growth, ensuring our services exceed client expectations."
                    },
                    {
                      name: "Richard Duterte",
                      role: "COO",
                      image: "/images/member2.jpg",
                      desc: "Skilled in branding and visual storytelling, Richard ensures every project reflects our clients’ unique identities."
                    },
                    {
                      name: "Reorio Mirandilla",
                      role: "Graphic Designer",
                      image: "/images/member3.jpg",
                      desc: "Oversees the printing and signage process, ensuring top-notch quality and timely delivery for all client projects."
                    }
                  ].map((member, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.2 }}
                      className="bg-white rounded-3xl shadow-lg p-6 text-center hover:shadow-2xl transition border border-blue-100"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-blue-200 mb-4"
                      />
                      <h4 className="text-xl font-semibold text-blue-700">{member.name}</h4>
                      <p className="text-gray-500 text-sm mb-3">{member.role}</p>
                      <p className="text-gray-700 text-sm">{member.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Clients */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-20"
          >
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-14">
                <h3 className="text-3xl font-bold text-blue-800 mb-4">
                  Clients & Brands We’ve Served
                </h3>
                <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  From local entrepreneurs to established companies, we are proud to
                  have been a part of their brand journey.
                </p>
              </div>

              {/* Logos grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 place-items-center">
                <img src="/images/client-1.png" alt="Client 1" className="w-40 h-20 object-contain" />
                <img src="/images/client-2.jpg" alt="Client 2" className="w-40 h-20 object-contain" />
                <img src="/images/client-3.png" alt="Client 3" className="w-40 h-20 object-contain" />
                <img src="/images/client-4.png" alt="Client 4" className="w-40 h-20 object-contain" />
                <img src="/images/client-5.jpg" alt="Client 5" className="w-40 h-20 object-contain" />
                <img src="/images/client-6.png" alt="Client 6" className="w-40 h-20 object-contain" />
                <img src="/images/client-7.png" alt="Client 7" className="w-40 h-20 object-contain" />
                <img src="/images/client-8.png" alt="Client 8" className="w-40 h-20 object-contain" />
                <img src="/images/client-9.png" alt="Client 9" className="w-40 h-20 object-contain" />
                <img src="/images/client-10.jpg" alt="Client 10" className="w-40 h-20 object-contain" />
                <img src="/images/client-11.png" alt="Client 11" className="w-40 h-20 object-contain" />
                <img src="/images/client-12.png" alt="Client 12" className="w-40 h-20 object-contain" />
                <img src="/images/client-13.jpg" alt="Client 13" className="w-40 h-20 object-contain" />
                <img src="/images/client-14.png" alt="Client 14" className="w-40 h-20 object-contain" />
                <img src="/images/client-15.png" alt="Client 15" className="w-40 h-20 object-contain" />
                {/* Add more logos as needed */}
              </div>
            </div>
          </motion.section>
        </div>
      </section>
    </div>
  );
}
