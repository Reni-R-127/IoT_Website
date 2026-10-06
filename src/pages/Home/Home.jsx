import {
  ArrowRight,
  Bot,
  Cpu,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig, whatsappUrl } from "../../config/site.js";
import { courses, projects, testimonials } from "../../data/content.js";
import CourseCard from "../../components/CourseCard/CourseCard.jsx";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import CTASection from "../../components/CTASection/CTASection.jsx";
import "./Home.css";

const highlights = [
  ["Hands-on Learning", "Learn by making and experimenting.", Cpu],
  ["Real Projects", "Turn concepts into working ideas.", Wrench],
  ["Expert Guidance", "Build with clear, supportive guidance.", ShieldCheck],
  [
    "Future-Ready Skills",
    "Explore skills for tomorrow's technology.",
    Sparkles,
  ],
];

export default function Home() {
  return (
    <>
      <main>
        <section className="home-hero">
          <div className="hero-content" data-animate="fade-left">
            <span
              className="hero-kicker"
              data-animate="fade-down"
              data-delay="1"
            >
              Kids • STEM • Technology
            </span>
            <h1 data-animate="fade-up" data-delay="2">
              Where Kids <em>Learn, Build</em> & Create with Technology
            </h1>
            <p data-animate="fade-up" data-delay="3">
              Give your child hands-on experience with IoT, electronics, coding,
              robotics and emerging technologies through fun and practical
              projects.
            </p>
            <div className="hero-actions" data-animate="fade-up" data-delay="4">
              <Link to="/courses" className="primary-btn">
                Explore Courses <ArrowRight size={17} />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                Enroll Now
              </a>
            </div>
            {/* <div className="hero-highlights">
              {highlights.map(([title, text, Icon]) => (
                <div key={title}>
                  <Icon size={17} />
                  <span>
                    <b>{title}</b>
                    {text}
                  </span>
                </div>
              ))}
            </div> */}
          </div>

          <div
            className="hero-visual"
            aria-label="Technology learning illustration"
            data-animate="zoom"
          >
            <div className="hero-orbit orbit-one"></div>
            <div className="hero-orbit orbit-two"></div>
            <div className="hero-device">
              <div className="device-top">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="device-board">
                <Cpu size={38} />
                <div className="board-line line-a"></div>
                <div className="board-line line-b"></div>
                <div className="sensor-dot"></div>
                <div className="sensor-dot two"></div>
              </div>
              <div className="device-base"></div>
            </div>
            <div className="floating-chip chip-one">
              <Bot size={23} />
            </div>
            <div className="floating-chip chip-two">
              <Zap size={22} />
            </div>
            <div className="floating-chip chip-three">
              <Lightbulb size={21} />
            </div>
            <div className="hero-caption">
              <Sparkles size={16} /> Build a real project
            </div>
          </div>
        </section>

        <section className="home-highlights">
          {highlights.map(([title, text, Icon], index) => (
            <div
              className="highlight-card"
              key={title}
              data-animate="pop"
              data-delay={(index % 8) + 1}
            >
              <Icon />

              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="home-section">
          <SectionTitle
            eyebrow="Learn by doing"
            title="Technology made practical for curious minds"
            text="A simple path from understanding the idea to building something kids can see, test and improve."
          />
          <div className="learning-steps">
            {["Learn", "Explore", "Build", "Create"].map((item, i) => (
              <div
                key={item}
                className="learning-step"
                data-animate="fade-up"
                data-delay={i + 1}
              >
                <span>0{i + 1}</span>
                <h3>{item}</h3>
                <p>
                  {
                    [
                      "Understand the basics.",
                      "Ask questions and experiment.",
                      "Turn ideas into projects.",
                      "Share, improve and innovate.",
                    ][i]
                  }
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="home-section soft-bg">
          <SectionTitle
            eyebrow="Popular learning"
            title="Courses built around making"
            text="Choose a starting point based on age, interest and experience."
          />
          <div className="course-grid">
            {courses.slice(0, 6).map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
          <div className="center-link">
            <Link to="/courses">
              View all courses <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <section className="home-section">
          <SectionTitle
            eyebrow="Project lab"
            title="What kids can build"
            text="Hands-on projects help children connect coding, sensors, electronics and real-world problems."
          />
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project[0]} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="home-section trust-section">
          <div className="trust-copy" data-animate="fade-left">
            <span className="eyebrow">For parents</span>
            <h2>Fun for kids. Meaningful for parents.</h2>
            <p>
              Our learning experience is designed to be playful without becoming
              childish, and practical without becoming overwhelming.
            </p>
          </div>
          <div className="trust-grid">
            {[
              "Safe Learning Environment",
              "Practical Education",
              "Age-appropriate Learning",
              "Project-based Learning",
            ].map((x, i) => (
              <div key={x} data-animate="pop" data-delay={i + 1}>
                <span>0{i + 1}</span>
                <ShieldCheck size={20} />
                <b>{x}</b>
              </div>
            ))}
          </div>
        </section>

        <section className="home-section">
          <SectionTitle
            eyebrow="Parent & student voices"
            title="What learners say"
            text="Placeholder testimonials are structured for easy replacement later."
          />
          <div className="testimonials-wrapper">
            <div className="testimonials-track">
              {testimonials.map((item, index) => (
                <TestimonialCard key={`review-${index}`} item={item} />
              ))}

              {testimonials.map((item, index) => (
                <TestimonialCard key={`review-copy-${index}`} item={item} />
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
    </>
  );
}
