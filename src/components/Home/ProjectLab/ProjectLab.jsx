import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  ArrowRight,
  FolderOpen,
  Lightbulb,
  Cpu,
  Leaf,
  Settings,
  Wifi,
} from "lucide-react";

import { projects } from "../../../data/content.js";
import Reveal from "../Reveal.jsx";

import projectDustbin from "../../../assets/project-dustbin.png";
import projectPlant from "../../../assets/project-plant.png";
import projectLight from "../../../assets/project-light.png";
import projectWeather from "../../../assets/project-weather.png";
import projectDoor from "../../../assets/project-door.png";
import projectRobot from "../../../assets/project-robot.png";
import projectHome from "../../../assets/project-home.png";
import projectSensor from "../../../assets/project-sensor.png";

import "./ProjectLab.css";

const art = [
  projectDustbin,
  projectPlant,
  projectLight,
  projectWeather,
  projectDoor,
  projectRobot,
  projectHome,
  projectSensor,
];

const icons = [
  Leaf,
  Leaf,
  Lightbulb,
  Cpu,
  Settings,
  Wifi,
  Wifi,
  Cpu,
];

const filters = [
  "All",
  "IoT",
  "Robotics",
  "Arduino",
  "ESP",
  "Smart Home",
];

export default function ProjectLab() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Reveal the section as it enters or leaves the viewport.
  useEffect(() => {
    const section = sectionRef.current;

    if (!section || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Scroll to Project Lab when navigating to /#project-lab.
  useEffect(() => {
    if (
      location.pathname !== "/" ||
      location.hash !== "#project-lab"
    ) {
      return undefined;
    }

    const frameId = requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => cancelAnimationFrame(frameId);
  }, [location.pathname, location.hash]);

  return (
    <section
      ref={sectionRef}
      id="project-lab"
      className={`project-lab ${
        isVisible ? "project-in-view" : ""
      }`}
      aria-labelledby="project-lab-title"
    >
      <div
        className="project-decor decor-left"
        aria-hidden="true"
      />

      <div
        className="project-decor decor-right"
        aria-hidden="true"
      />

      <div className="project-container">
        <Reveal>
          <header className="project-heading">
            <span>PROJECT LAB</span>

            <h2 id="project-lab-title">
              What kids can <strong>build</strong>
            </h2>

            <p>
              Hands-on projects help children connect coding, sensors,
              electronics and real-world problems.
            </p>
          </header>
        </Reveal>

        <div
          className="project-filters"
          role="group"
          aria-label="Project categories"
        >
          {filters.map((filter, index) => (
            <button
              type="button"
              key={filter}
              className={index === 0 ? "active" : ""}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="project-grid-home">
          {projects.map((project, index) => {
            const Icon = icons[index] || Cpu;
            const projectImage = art[index];

            return (
              <Reveal key={project[0]} delay={index * 70}>
                <article className="project-home-card">
                  <div className={`project-home-art art-${index}`}>
                    {projectImage && (
                      <img
                        src={projectImage}
                        alt={project[0]}
                        loading="lazy"
                        decoding="async"
                      />
                    )}

                    <Icon
                      className="project-art-icon"
                      size={28}
                      aria-hidden="true"
                    />
                  </div>

                  <h3>{project[0]}</h3>

                  <p>{project[1]}</p>

                  <Link to="/courses">
                    View Project
                    <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal direction="zoom" className="all-projects-wrap">
          <Link className="all-projects" to="/courses">
            <FolderOpen size={19} aria-hidden="true" />
            View All Projects
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}