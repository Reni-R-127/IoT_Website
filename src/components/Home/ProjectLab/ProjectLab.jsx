import {
  ArrowRight,
  FolderOpen,
  Lightbulb,
  Cpu,
  Leaf,
  Settings,
  Wifi,
} from "lucide-react";

import { Link } from "react-router-dom";

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


/* =========================================
   PROJECT IMAGES
========================================= */

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


/* =========================================
   PROJECT ICONS
========================================= */

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


/* =========================================
   PROJECT FILTERS
========================================= */

const filters = [
  "All",
  "IoT",
  "Robotics",
  "Arduino",
  "ESP",
  "Smart Home",
];


export default function ProjectLab() {
  return (
    <section className="project-lab">

      {/* =========================================
          DECORATION
      ========================================= */}

      <div className="project-decor decor-left"></div>

      <div className="project-decor decor-right"></div>


      <div className="project-container">

        {/* =========================================
            SECTION HEADING
        ========================================= */}

        <Reveal>

          <header className="project-heading">

            <span>
              PROJECT LAB
            </span>

            <h2>
              What kids can <strong>build</strong>
            </h2>

            <p>
              Hands-on projects help children connect coding,
              sensors, electronics and real-world problems.
            </p>

          </header>

        </Reveal>


        {/* =========================================
            FILTERS
        ========================================= */}

        <div className="project-filters">

          {filters.map((filter, index) => (

            <button
              key={filter}
              className={index === 0 ? "active" : ""}
            >
              {filter}
            </button>

          ))}

        </div>


        {/* =========================================
            PROJECT GRID
        ========================================= */}

        <div className="project-grid-home">

          {projects.map((project, index) => {

            const Icon = icons[index] || Cpu;

            return (

              <Reveal
                key={project[0]}
                delay={index * 70}
              >

                <article className="project-home-card">

                  {/* PROJECT IMAGE */}

                  <div
                    className={`project-home-art art-${index}`}
                  >

                    <img
                      src={art[index]}
                      alt={project[0]}
                    />

                    <Icon
                      className="project-art-icon"
                      size={28}
                    />

                  </div>


                  {/* PROJECT CONTENT */}

                  <h3>
                    {project[0]}
                  </h3>

                  <p>
                    {project[1]}
                  </p>


                  {/* PROJECT LINK */}

                  <Link to="/courses">

                    View Project

                    <ArrowRight size={17} />

                  </Link>

                </article>

              </Reveal>

            );
          })}

        </div>


        {/* =========================================
            VIEW ALL PROJECTS
        ========================================= */}

        <Reveal
          direction="zoom"
          className="all-projects-wrap"
        >

          <Link
            className="all-projects"
            to="/courses"
          >

            <FolderOpen size={19} />

            View All Projects

            <ArrowRight size={18} />

          </Link>

        </Reveal>

      </div>

    </section>
  );
}