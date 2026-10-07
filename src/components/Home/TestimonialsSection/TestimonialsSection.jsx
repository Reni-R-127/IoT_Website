import { testimonials } from "../../../data/content.js";

import TestimonialCard from "../../TestimonialCard/TestimonialCard.jsx";
import SectionTitle from "../../SectionTitle/SectionTitle.jsx";

import "./TestimonialsSection.css";

export default function TestimonialsSection() {
  return (
    <section className="home-section testimonials-section">

      <SectionTitle
        eyebrow="Parent & student voices"
        title="What learners say"
        text="Placeholder testimonials are structured for easy replacement later."
      />

      <div className="testimonials-wrapper">

        <div className="testimonials-track">

          {testimonials.map((item, index) => (

            <TestimonialCard
              key={`review-${index}`}
              item={item}
            />

          ))}

          {testimonials.map((item, index) => (

            <TestimonialCard
              key={`review-copy-${index}`}
              item={item}
            />

          ))}

        </div>

      </div>

    </section>
  );
}