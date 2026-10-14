import { useEffect, useRef, useState } from "react";
import blogHeroImage from "../../../assets/Blog/BlogHero/blog-hero.png";
import "./BlogHero.css";

export default function BlogHero() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`blog-hero ${visible ? "blog-hero-visible" : ""}`}
      aria-labelledby="blog-hero-title"
    >
      {/* Decorative background circles */}
      <div
        className="blog-hero-decoration blog-hero-decoration-one"
        aria-hidden="true"
      />

      <div
        className="blog-hero-decoration blog-hero-decoration-two"
        aria-hidden="true"
      />

      <div
        className="blog-hero-decoration blog-hero-decoration-three"
        aria-hidden="true"
      />

      <div className="blog-hero-container">
        {/* Left content */}
        <div className="blog-hero-content">
          <div className="blog-hero-eyebrow">
            <span>BLOG</span>
            <span className="blog-hero-eyebrow-line" />
          </div>

          <h1 id="blog-hero-title">
            Simple technology
            <br className="blog-hero-desktop-break" />
            {" "}ideas for
            <br className="blog-hero-desktop-break" />
            {" "}<span>curious minds.</span>
          </h1>

          <p className="blog-hero-description">
            Short, practical articles about IoT, robotics, coding,
            electronics, AI and STEM education.
          </p>
        </div>

        {/* Right illustration */}
        <div className="blog-hero-visual">
          <div
            className="blog-hero-image-glow"
            aria-hidden="true"
          />

          <img
            src={blogHeroImage}
            alt="Technology blog illustration featuring a laptop, robotics, coding books and a friendly robot"
            className="blog-hero-image"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}