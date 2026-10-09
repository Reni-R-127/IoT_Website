
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import "./Blogs.css";

import blogImage1 from "../../../assets/Blog/Blogs/Blogs-1.png";
import blogImage2 from "../../../assets/Blog/Blogs/Blogs-2.png";
import blogImage3 from "../../../assets/Blog/Blogs/Blogs-3.png";
import blogImage4 from "../../../assets/Blog/Blogs/Blogs-4.png";
import blogImage5 from "../../../assets/Blog/Blogs/Blogs-5.png";
import blogImage6 from "../../../assets/Blog/Blogs/Blogs-6.png";
import blogRobot from "../../../assets/Blog/Blogs/blog-robot.png";

const categories = [
  "All",
  "IoT",
  "Robotics",
  "Coding",
  "Electronics",
  "AI",
  "Kids Projects",
  "STEM Education",
];

const blogPosts = [
  {
    id: 1,
    category: "IoT",
    date: "Oct 05, 2026",
    title: "What is IoT?",
    description: "A simple explanation of Internet of Things for kids.",
    image: blogImage1,
    alt: "IoT technology and electronic components",
  },
  {
    id: 2,
    category: "Kids Projects",
    date: "Oct 03, 2026",
    title: "5 Fun IoT Projects Kids Can Build",
    description: "Simple project ideas using sensors and microcontrollers.",
    image: blogImage2,
    alt: "A small robotics car built with electronic components",
  },
  {
    id: 3,
    category: "IoT",
    date: "Sep 29, 2026",
    title: "How Do Smart Homes Work?",
    description: "Explain smart home technology in simple terms.",
    image: blogImage3,
    alt: "Smart home model with a connected light bulb",
  },
  {
    id: 4,
    category: "Electronics",
    date: "Sep 20, 2026",
    title: "Arduino for Beginners",
    description: "A beginner's guide to Arduino and how to get started.",
    image: blogImage4,
    alt: "Arduino board and electronic components",
  },
  {
    id: 5,
    category: "AI",
    date: "Sep 15, 2026",
    title: "AI for Kids",
    description: "Understand how artificial intelligence works in a simple way.",
    image: blogImage5,
    alt: "Friendly robot learning about artificial intelligence",
  },
  {
    id: 6,
    category: "Robotics",
    date: "Sep 10, 2026",
    title: "How Sensors Work?",
    description: "Learn how different sensors detect and measure things around us.",
    image: blogImage6,
    alt: "Ultrasonic and environmental sensors",
  },
];

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  const filteredPosts = useMemo(() => {
    const query = searchText.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" ||
        post.category === activeCategory ||
        (activeCategory === "STEM Education" &&
          ["IoT", "Electronics", "Robotics", "AI", "Kids Projects"].includes(
            post.category
          ));

      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchText]);

  return (
    <section className="blogs-section" aria-labelledby="blogs-title">
      <div className="blogs-decoration blogs-decoration-blue" aria-hidden="true" />
      <div className="blogs-decoration blogs-decoration-purple" aria-hidden="true" />
      <div className="blogs-decoration blogs-decoration-yellow" aria-hidden="true" />
      <div className="blogs-decoration blogs-decoration-cyan" aria-hidden="true" />

      <div className="blogs-container">
        <header className="blogs-heading">
          <span className="blogs-eyebrow">TECHNOLOGY EDUCATION</span>

          <h1 id="blogs-title">
            Explore the blog
          </h1>

          <p>
            Simple and practical articles about IoT, robotics, coding,
            electronics, AI and STEM education for curious minds.
          </p>

          <img
            src={blogRobot}
            alt=""
            className="blogs-heading-robot"
            aria-hidden="true"
          />
        </header>

        <div className="blogs-toolbar">
          <label className="blogs-search">
            <Search size={23} aria-hidden="true" />

            <input
              type="search"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="Search articles, topics or keywords..."
              aria-label="Search blog articles"
            />

            {searchText && (
              <button
                type="button"
                className="blogs-clear-search"
                onClick={() => setSearchText("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </label>

          <div className="blogs-categories" aria-label="Filter blog categories">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={`blogs-category ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="blogs-grid" aria-live="polite">
          {filteredPosts.map((post, index) => (
            <article
              className="blogs-card"
              key={post.id}
              style={{ "--blogs-card-delay": `${index * 90}ms` }}
            >
              <a
                className="blogs-card-image-link"
                href={`/blog/${post.id}`}
                aria-label={`Read ${post.title}`}
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  className="blogs-card-image"
                  loading={index < 3 ? "eager" : "lazy"}
                />
              </a>

              <div className="blogs-card-content">
                <div className="blogs-card-meta">
                  <span
                    className={`blogs-tag blogs-tag-${post.category
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {post.category}
                  </span>

                  <time>{post.date}</time>
                </div>

                <h2>
                  <a href={`/blog/${post.id}`}>{post.title}</a>
                </h2>

                <p>{post.description}</p>

                <a
                  href={`/blog/${post.id}`}
                  className="blogs-read-more"
                >
                  Read More
                  <ArrowRight size={19} strokeWidth={2.5} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="blogs-empty">
            <Search size={34} />
            <h2>No articles found</h2>
            <p>Try another keyword or select a different category.</p>

            <button
              type="button"
              onClick={() => {
                setSearchText("");
                setActiveCategory("All");
              }}
            >
              Show all articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
