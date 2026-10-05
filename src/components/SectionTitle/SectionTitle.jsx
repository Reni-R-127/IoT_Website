import "./SectionTitle.css";

export default function SectionTitle({ eyebrow, title, text, align = "center" }) {
  return (
    <div className={`section-title ${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
