import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Lightbulb,
  Target,
  Brain,
  Wrench,
  Rocket,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

import whyTechnologyImage from "../../../assets/About/WhyTechnology/why-technology-transparent.png";
import "./WhyTechnology.css";

const strengths = [
  { title: "Creativity", icon: Lightbulb, tone: "purple" },
  { title: "Problem Solving", icon: Target, tone: "pink" },
  { title: "Logical Thinking", icon: Brain, tone: "blue" },
  { title: "Practical Skills", icon: Wrench, tone: "green" },
  { title: "Innovation", icon: Rocket, tone: "yellow" },
  { title: "Confidence", icon: BarChart3, tone: "cyan" },
];

export default function WhyTechnology() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`why-technology ${isVisible ? "is-visible" : ""}`}
      aria-labelledby="why-tech-heading"
    >
      <div
        className="why-tech-decoration why-tech-decoration-left"
        aria-hidden="true"
      />

      <div
        className="why-tech-decoration why-tech-decoration-right"
        aria-hidden="true"
      />

      <div className="why-tech-container">
        <div className="why-tech-content">
          <span className="why-tech-eyebrow why-reveal">
            WHY TECHNOLOGY?
          </span>

          <h2
            id="why-tech-heading"
            className="why-reveal"
          >
            Skills that go beyond
            <br className="why-tech-desktop-break" /> the classroom
          </h2>

          <p className="why-tech-description why-reveal">
            Technology projects encourage children to think, test,
            make mistakes, solve problems and explain what they build.
          </p>

          <div className="why-tech-skills">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`why-tech-skill why-tech-${item.tone} why-reveal`}
                  style={{
                    transitionDelay: isVisible
                      ? `${index * 90}ms`
                      : "0ms",
                  }}
                >
                  <span className="why-tech-skill-icon">
                    <Icon
                      size={23}
                      strokeWidth={2.4}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="why-tech-skill-title">
                    {item.title}
                  </span>
                </article>
              );
            })}
          </div>

          <Link
            to="/courses"
            className="why-tech-button why-reveal"
          >
            <span>Explore Courses</span>
            <ArrowRight size={19} strokeWidth={2.6} aria-hidden="true" />
          </Link>
        </div>

        <div className="why-tech-visual why-reveal">
          <img
            src={whyTechnologyImage}
            alt="Children learning technology through robotics, coding and electronics"
            className="why-tech-image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}