import "./PageHero.css";

export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="page-hero-shape shape-one"></div>
      <div className="page-hero-shape shape-two"></div>
      <div className="page-hero-content" data-animate="fade-up">
        <span data-animate="fade-down" data-delay="1">{eyebrow}</span>
        <h1 data-animate="zoom" data-delay="2">{title}</h1>
        <p data-animate="fade-up" data-delay="3">{text}</p>
      </div>
    </section>
  );
}
