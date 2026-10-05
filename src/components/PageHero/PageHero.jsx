import "./PageHero.css";

export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="page-hero-shape shape-one"></div>
      <div className="page-hero-shape shape-two"></div>
      <div className="page-hero-content">
        <span>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
