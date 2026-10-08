import {
  BookOpen,
  Box,
  Users,
  Cpu,
  Lightbulb,
  BarChart3,
} from "lucide-react";

import whoWeAreImage from "../../../assets/About/WhoWeAre/who-we-are.png";

import "./WhoWeAre.css";

const featureCards = [
  {
    title: "Hands-on Learning",
    text: "Learn by doing and experimenting.",
    icon: Cpu,
    className: "who-feature-blue",
  },
  {
    title: "Learn by Creating",
    text: "Turn ideas into real projects.",
    icon: Lightbulb,
    className: "who-feature-yellow",
  },
  {
    title: "Future-Ready Skills",
    text: "Build skills for a brighter tomorrow.",
    icon: BarChart3,
    className: "who-feature-purple",
  },
];

const stats = [
  {
    value: "6+",
    label: "Learning Areas",
    icon: BookOpen,
    className: "who-stat-blue",
  },
  {
    value: "20+",
    label: "Practical Projects",
    icon: Box,
    className: "who-stat-green",
  },
  {
    value: "100%",
    label: "Hands-on Approach",
    icon: Users,
    className: "who-stat-purple",
  },
];

export default function WhoWeAre() {
  return (
    <section className="who-we-are">

      {/* =========================================
          BACKGROUND DECORATION
      ========================================= */}

      <div
        className="who-circle who-circle-top-left"
        aria-hidden="true"
      />

      <div
        className="who-circle who-circle-top-right"
        aria-hidden="true"
      />

      <div
        className="who-circle who-circle-bottom-left"
        aria-hidden="true"
      />

      <div
        className="who-circle who-circle-bottom-right"
        aria-hidden="true"
      />


      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="who-we-are-container">

        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div
          className="who-content"
          data-animate="fade-left"
        >

          <div className="who-heading-row">

            <span className="who-eyebrow">
              WHO WE ARE
            </span>

            <span className="who-eyebrow-line"></span>

          </div>


          <h2>
            Learning becomes
            <br />

            powerful when kids
            <br />

            get to <strong>build.</strong>
          </h2>


          <span
            className="who-heading-underline"
            aria-hidden="true"
          />


          <p className="who-description">
            We create hands-on learning experiences around IoT,
            electronics, Arduino, sensors, robotics, coding and AI.
            Our goal is to make technology learning simple,
            practical and exciting for every child.
          </p>


          {/* =========================================
              FEATURE CARDS
          ========================================= */}

          <div className="who-feature-grid">

            {featureCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`who-feature-card ${item.className}`}
                  data-animate="pop"
                  data-delay={index + 1}
                >

                  <div className="who-feature-icon">
                    <Icon size={29} />
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </article>
              );
            })}

          </div>


          {/* =========================================
              STATISTICS
          ========================================= */}

          <div className="who-stats">

            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`who-stat ${item.className}`}
                >

                  <Icon
                    className="who-stat-icon"
                    size={39}
                  />

                  <div className="who-stat-content">

                    <strong>
                      {item.value}
                    </strong>

                    <span>
                      {item.label}
                    </span>

                  </div>

                </div>
              );
            })}

          </div>

        </div>


        {/* =========================================
            RIGHT IMAGE
        ========================================= */}

        <div
          className="who-visual"
          data-animate="zoom"
        >

          <div
            className="who-image-glow"
            aria-hidden="true"
          />


          <div
            className="who-orbit who-orbit-one"
            aria-hidden="true"
          />

          <div
            className="who-orbit who-orbit-two"
            aria-hidden="true"
          />


          <img
            src={whoWeAreImage}
            alt="Children learning and building technology projects"
            className="who-image"
          />

        </div>

      </div>

    </section>
  );
}