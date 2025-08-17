import { motion } from "framer-motion";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Tips on Choosing the Right Signage",
      excerpt:
        "Learn how to pick the perfect signage to grab attention and communicate effectively.",
      link: "/blog/tips-on-choosing-signage",
    },
    {
      id: 2,
      title: "How to Prepare Your Design Files for Printing",
      excerpt:
        "Make sure your files are print-ready with these essential pre-press guidelines.",
      link: "/blog/how-to-prepare-design-files",
    },
    {
      id: 3,
      title: "Behind-the-Scenes of a Large Printing Job",
      excerpt:
        "Take a peek at how a large-scale printing project comes to life from start to finish.",
      link: "/blog/behind-the-scenes",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="blog">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Our Blog</h2>
        <p className="section-sub text-center max-w-2xl mx-auto mb-10">
          Helpful tips and stories from our printing experts.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white shadow-md rounded-xl p-6"
            >
              <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                to={post.link}
                className="text-primary font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
