import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../../../assets/About/Hero/hero.png";
import "./AboutHero.css";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-decoration about-hero-blue" aria-hidden="true" />
      <div className="about-hero-decoration about-hero-purple" aria-hidden="true" />
      <div className="about-hero-decoration about-hero-yellow" aria-hidden="true" />

      <div className="about-hero-container">
        <div className="about-hero-content">
          <span className="about-hero-eyebrow">ABOUT US</span>

          <h1>
            Technology learning
            <br />
            that children can
            <br />
            <strong>experience,</strong>
            <br className="about-hero-mobile-break" />
            not just watch.
          </h1>

          <span className="about-hero-underline" aria-hidden="true" />

          <p>
            We are a technology education initiative focused on helping
            children understand and build with modern technology.
          </p>

          <div className="about-hero-actions">
            <Link to="/courses" className="about-hero-primary">
              Explore Courses
              <ArrowRight size={19} strokeWidth={2.5} />
            </Link>

            <Link to="/about" className="about-hero-secondary">
              Learn More
            </Link>
          </div>
        </div>

        <div className="about-hero-visual">
          <div className="about-hero-glow" aria-hidden="true" />
          <div className="about-hero-orbit orbit-a" aria-hidden="true" />
          <div className="about-hero-orbit orbit-b" aria-hidden="true" />

          <img
            src={heroImage}
            alt="Child building a robotics and electronics project"
            className="about-hero-image"
          />
        </div>
      </div>
    </section>
  );
}
