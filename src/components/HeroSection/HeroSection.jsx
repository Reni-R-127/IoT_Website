import { ArrowRight, Bot, Cpu, Lightbulb, ShieldCheck, Sparkles, Wrench, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { whatsappUrl } from "../../../config/site.js";
import Reveal from "../Reveal.jsx";
import boy from "../../assets/boy.png";
import girl from "../../assets/girl.png";
import "./HeroSection.css";

const highlights = [
  ["Hands-on Learning", "Learn by making and experimenting.", Cpu, "cyan"],
  ["Real Projects", "Turn concepts into working ideas.", Wrench, "purple"],
  ["Expert Guidance", "Build with clear, supportive guidance.", ShieldCheck, "blue"],
  ["Future-Ready Skills", "Explore skills for tomorrow's technology.", Sparkles, "yellow"],
];

export default function HeroSection() {
  return (
    <section className="home-hero-section">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-inner">
        <div className="hero-grid">
          <Reveal direction="left" className="hero-copy">
            <span className="hero-kicker">KIDS • STEM • TECHNOLOGY</span>
            <h1>
              Where Kids <em>Learn, Build</em> &amp; Create with Technology
            </h1>
            <p>
              Give your child hands-on experience with IoT, electronics, coding,
              robotics and emerging technologies through fun and practical projects.
            </p>
            <div className="hero-actions">
              <Link to="/courses" className="hero-primary">
                Explore Courses <ArrowRight size={18} />
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hero-secondary">
                Enroll Now
              </a>
            </div>
          </Reveal>

          <Reveal direction="zoom" className="hero-art-wrap" delay={120}>
            <div className="hero-art">
              <div className="hero-orbit orbit-a" />
              <div className="hero-orbit orbit-b" />
              <div className="hero-device">
                <div className="device-top"><span /><span /><span /></div>
                <div className="device-board">
                  <Cpu size={42} />
                  <span className="board-line board-line-a" />
                  <span className="board-line board-line-b" />
                  <span className="sensor sensor-a" />
                  <span className="sensor sensor-b" />
                </div>
                <div className="device-base" />
              </div>
              <div className="floating-chip chip-one"><Bot size={23} /></div>
              <div className="floating-chip chip-two"><Zap size={22} /></div>
              <div className="floating-chip chip-three"><Lightbulb size={21} /></div>
              <div className="hero-caption"><Sparkles size={15} /> Build a real project</div>
            </div>
          </Reveal>
        </div>

        <div className="hero-highlights">
          {highlights.map(([title, text, Icon, tone], index) => (
            <Reveal key={title} delay={index * 90}>
              <article className={`hero-highlight-card ${tone}`}>
                <Icon className="highlight-icon" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="highlight-line" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
