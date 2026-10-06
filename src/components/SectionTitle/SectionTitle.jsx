import "./SectionTitle.css";

export default function SectionTitle({ eyebrow, title, text, align = "center" }) {
  return (
    <div className={`section-title ${align}`} data-animate="fade-up">
      {eyebrow && <span className="eyebrow" data-animate="fade-down" data-delay="1">{eyebrow}</span>}
      <h2 data-animate="zoom" data-delay="2">{title}</h2>
      {text && <p data-animate="fade-up" data-delay="3">{text}</p>}
    </div>
  );
}
