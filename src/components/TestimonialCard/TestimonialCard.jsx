import { Quote } from "lucide-react";
import "./TestimonialCard.css";

export default function TestimonialCard({ item, index = 0 }) {
  const delay = (index % 8) + 1;

  return (
    <article
      className="testimonial-card"
      data-animate="fade-up"
      data-delay={delay}
    >
      <Quote size={24} />
      <p>“{item[1]}”</p>
      <strong>{item[0]}</strong>
      <span>{item[2]}</span>
    </article>
  );
}
