function Timeline() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  if (inView) controls.start("visible");

  const milestones = [
    {
      year: "2018",
      title: "Humble Beginnings",
      desc: "Started as a small signage shop in Quezon City.",
      icon: "/icons/shop.svg",
    },
    {
      year: "2020",
      title: "Expansion",
      desc: "Expanded into large-format and digital printing services.",
      icon: "/icons/printing.svg",
    },
    {
      year: "2023+",
      title: "Nationwide Success",
      desc: "Proudly served over 500 satisfied clients nationwide.",
      icon: "/icons/success.svg",
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
                {/* Left/Right desktop layout */}
                <div className={`hidden md:block md:w-1/2 ${idx % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                  {idx % 2 === 0 ? (
                    <div className="bg-blue-50 p-6 rounded-2xl shadow-lg inline-block relative">
                      <img src={milestone.icon} alt={milestone.title} className="w-12 h-12 mx-auto mb-3" />
                      <h4 className="text-xl font-bold text-blue-800 mb-2">{milestone.year}</h4>
                      <h5 className="text-blue-700 font-semibold mb-2">{milestone.title}</h5>
                      <p className="text-gray-700 text-sm">{milestone.desc}</p>
                    </div>
                  ) : null}
                </div>

                {/* Timeline marker */}
                <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white z-10 relative shadow-lg" />

                <div className={`hidden md:block md:w-1/2 ${idx % 2 === 0 ? "pl-12" : "pr-12"}`}>
                  {idx % 2 !== 0 ? (
                    <div className="bg-blue-50 p-6 rounded-2xl shadow-lg inline-block relative">
                      <img src={milestone.icon} alt={milestone.title} className="w-12 h-12 mx-auto mb-3" />
                      <h4 className="text-xl font-bold text-blue-800 mb-2">{milestone.year}</h4>
                      <h5 className="text-blue-700 font-semibold mb-2">{milestone.title}</h5>
                      <p className="text-gray-700 text-sm">{milestone.desc}</p>
                    </div>
                  ) : null}
                </div>

                {/* Mobile view */}
                <div className="md:hidden mt-6 w-full">
                  <div className="bg-blue-50 p-6 rounded-2xl shadow-lg w-full text-center relative">
                    <img src={milestone.icon} alt={milestone.title} className="w-12 h-12 mx-auto mb-3" />
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
