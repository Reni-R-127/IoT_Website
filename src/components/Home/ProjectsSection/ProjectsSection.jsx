import { projects } from "../../../data/content.js";

import ProjectCard from "../../ProjectCard/ProjectCard.jsx";
import SectionTitle from "../../SectionTitle/SectionTitle.jsx";

import "./ProjectsSection.css";

export default function ProjectsSection() {
  return (
    <section className="home-section projects-section">

      <SectionTitle
        eyebrow="Project lab"
        title="What kids can build"
        text="Hands-on projects help children connect coding, sensors, electronics and real-world problems."
      />

      <div className="project-grid">

        {projects.map((project, index) => (

          <ProjectCard
            key={project[0]}
            project={project}
            index={index}
          />

        ))}

      </div>

    </section>
  );
}