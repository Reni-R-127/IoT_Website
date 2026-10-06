import "./ProjectCard.css";

export default function ProjectCard({ project, index = 0 }) {
  const delay = (index % 8) + 1;

  return (
    <article className="project-card" data-animate="fade-up" data-delay={delay}>
      <div className="project-art">{project[2]}</div>
      <h3>{project[0]}</h3>
      <p>{project[1]}</p>
    </article>
  );
}
