import {
  ArrowRight,
  Lightbulb,
  Target,
  Brain,
  Wrench,
  Rocket,
  BarChart3,
} from "lucide-react";

import whyTechnologyImage from "../../../assets/WhyTechnology/why-technology-transparent.png";

import "./WhyTechnology.css";

const strengths = [
  {
    title: "Creativity",
    icon: Lightbulb,
    tone: "purple",
  },
  {
    title: "Problem Solving",
    icon: Target,
    tone: "pink",
  },
  {
    title: "Logical Thinking",
    icon: Brain,
    tone: "blue",
  },
  {
    title: "Practical Skills",
    icon: Wrench,
    tone: "green",
  },
  {
    title: "Innovation",
    icon: Rocket,
    tone: "yellow",
  },
  {
    title: "Confidence",
    icon: BarChart3,
    tone: "cyan",
  },
];

export default function WhyTechnology() {
  return (
    <section className="why-technology">
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

          <span className="why-tech-eyebrow">
            WHY TECHNOLOGY?
          </span>

          <h2>
            Skills that go beyond
            <br className="why-tech-desktop-break" />
            the classroom
          </h2>

          <p className="why-tech-description">
            Technology projects encourage children to think, test,
            make mistakes, solve problems and explain what they build.
          </p>

          <div className="why-tech-skills">
            {strengths.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className={`why-tech-skill why-tech-${item.tone}`}
                  key={item.title}
                >
                  <span className="why-tech-skill-icon">
                    <Icon size={23} strokeWidth={2.4} />
                  </span>

                  <span className="why-tech-skill-title">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>

          <a
            href="/courses"
            className="why-tech-button"
          >
            <span>Explore Courses</span>
            <ArrowRight size={19} strokeWidth={2.6} />
          </a>

        </div>

        <div className="why-tech-visual">
          <img
            src={whyTechnologyImage}
            alt="Children learning technology through robotics, coding and electronics"
            className="why-tech-image"
          />
        </div>

      </div>
    </section>
  );
}
