import { Quote } from "lucide-react";
import "./TestimonialCard.css";

export default function TestimonialCard({ item }) {
  return (
    <article className="testimonial-card">
      <Quote size={24} />

      <p>“{item[1]}”</p>

      <strong>{item[0]}</strong>

      <span>{item[2]}</span>
    </article>
  );
}