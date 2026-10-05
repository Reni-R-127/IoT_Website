import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-art">{project[2]}</div>
      <h3>{project[0]}</h3>
      <p>{project[1]}</p>
    </article>
  );
}
