import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "../../../assets/About/Hero/hero.png";

import "./AboutHero.css";

export default function AboutHero() {
  return (
    <section className="about-hero">

      {/* =========================================
          TOP DECORATIVE HALF CIRCLES
      ========================================= */}

      <div
        className="about-hero-decoration about-hero-blue"
        aria-hidden="true"
      />

      <div
        className="about-hero-decoration about-hero-purple"
        aria-hidden="true"
      />


      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="about-hero-container">

        {/* =========================================
            CONTENT
        ========================================= */}

        <div className="about-hero-content">

          <span className="about-hero-eyebrow">
            ABOUT US
          </span>

          <h1>
            Technology learning
            <br />
            that children can
            <br />
            <strong>experience,</strong>
            <br />
            not just watch.
          </h1>

          <span
            className="about-hero-underline"
            aria-hidden="true"
          />

          <p>
            We are a technology education initiative focused on
            helping children understand and build with modern
            technology.
          </p>

          <div className="about-hero-actions">

            <Link
              to="/courses"
              className="about-hero-primary"
            >
              Explore Courses
              <ArrowRight
                size={20}
                strokeWidth={2.5}
              />
            </Link>

            <Link
              to="/about"
              className="about-hero-secondary"
            >
              Learn More
            </Link>

          </div>

        </div>


        {/* =========================================
            HERO IMAGE
        ========================================= */}

        <div className="about-hero-visual">

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