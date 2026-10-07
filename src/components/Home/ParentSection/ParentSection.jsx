import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  ShieldCheck,
  Users,
  Settings,
  Quote,
} from "lucide-react";
import { testimonials } from "../../../data/content.js";
import Reveal from "../Reveal.jsx";
import "./ParentSection.css";

const trustItems = [
  [
    "Safe Learning Environment",
    "A secure and supportive space for young learners.",
    ShieldCheck,
    "blue",
  ],
  [
    "Practical Education",
    "Hands-on projects that build real skills for the future.",
    Lightbulb,
    "yellow",
  ],
  [
    "Age-appropriate Learning",
    "Designed for different age groups and skill levels.",
    Users,
    "green",
  ],
  [
    "Project-based Learning",
    "Turn ideas into working models through fun projects.",
    Settings,
    "purple",
  ],
];

export default function ParentSection() {
  const [index, setIndex] = useState(0);
  const visible = [0, 1, 2].map(
    (offset) => testimonials[(index + offset) % testimonials.length],
  );
  return (
    <section className="parent-section">
      <div className="parent-decor parent-one" />
      <div className="parent-decor parent-two" />
      <div className="parent-container">
        <Reveal>
          <header className="parent-heading">
            <span>WHY FAMILIES CHOOSE TECHSPROUT</span>
            <h2>
              Fun for kids. Meaningful <strong>for parents.</strong>
            </h2>
            <p>
              A learning experience designed to be playful without becoming
              childish,
              <br className="desktop-break" /> and practical without becoming
              overwhelming.
            </p>
          </header>
        </Reveal>

        <div className="trust-home-grid">
          {trustItems.map(([title, text, Icon, tone], i) => (
            <Reveal key={title} delay={i * 90}>
              <article className={`trust-home-card ${tone}`}>
                <div className="trust-icon">
                  <Icon size={30} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="voices-heading" delay={100}>
          <span>PARENT &amp; STUDENT VOICES</span>
          <h2>What learners say</h2>
          <p>
            Real stories from parents and students who are building, learning
            and growing with TechSprout.
          </p>
        </Reveal>

        <div className="testimonial-carousel">
          <div className="testimonial-track">
            {[...testimonials, ...testimonials].map((item, i) => (
              <article
                className="testimonial-home-card"
                key={`${item[0]}-${i}`}
              >
                <div className="testimonial-top">
                  <Quote size={25} />

                  <span>★★★★★</span>
                </div>

                <p>“{item[1]}”</p>

                <div className="testimonial-person">
                  <div className={`avatar avatar-${i % 3}`}>
                    {item[0].charAt(0)}
                  </div>

                  <div>
                    <strong>{item[0]}</strong>
                    <span>{item[2]}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="testimonial-dots">
          {Array.from({ length: Math.min(5, testimonials.length) }).map(
            (_, i) => (
              <button
                key={i}
                className={i === index % 5 ? "active" : ""}
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
