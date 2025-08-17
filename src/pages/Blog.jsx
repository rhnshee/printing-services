import { Link } from "react-router-dom";

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
    <div>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center text-center bg-gradient-to-r from-primary/90 to-primary-dark/90 text-white">
        {/* Background image (optional) */}
        <div className="absolute inset-0">
          <img
            src="/images/blog-hero.png"
            alt="Blog Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Our Blog</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Insights, tips, and stories from the world of printing and design.
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
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
