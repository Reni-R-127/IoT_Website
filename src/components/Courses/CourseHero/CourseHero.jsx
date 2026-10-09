import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  GraduationCap,
  Play,
  Cpu,
  Wifi,
  Bot,
  Code2,
  BrainCircuit,
  Infinity,
  BookOpen,
  Settings,
  Users,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import courseHeroImage from "../../../assets/Courses/CourseHero/course-hero.png";
import "./CourseHero.css";

const floatingTopics = [
  { label: "IoT", icon: Cpu, className: "topic-iot" },
  { label: "Sensors", icon: Wifi, className: "topic-sensors" },
  { label: "Arduino", icon: Infinity, className: "topic-arduino" },
  { label: "Robotics", icon: Bot, className: "topic-robotics" },
  { label: "Coding", icon: Code2, className: "topic-coding" },
  { label: "AI", icon: BrainCircuit, className: "topic-ai" },
];

const stats = [
  { value: 6, suffix: "+", label: "Learning Areas", icon: BookOpen, tone: "purple" },
  { value: 20, suffix: "+", label: "Practical Projects", icon: Settings, tone: "blue" },
  { value: 100, suffix: "+", label: "Students Trained", icon: Users, tone: "green" },
  { value: null, suffix: "", label: "Mentor Support", display: "Expert", icon: Star, tone: "yellow" },
];

function useCountUp(target, active, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active || target === null) {
      setCount(0);
      return undefined;
    }

    let frameId;
    const startTime = performance.now();
    setCount(0);

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));

      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [target, active, duration]);

  return count;
}

function StatCard({ stat, active }) {
  const count = useCountUp(stat.value, active);
  const Icon = stat.icon;

  return (
    <article className={`course-stat-card course-stat-${stat.tone}`}>
      <span className="course-stat-icon">
        <Icon size={25} strokeWidth={2.3} aria-hidden="true" />
      </span>
      <div className="course-stat-copy">
        <strong>{stat.display ?? `${count}${stat.suffix}`}</strong>
        <span>{stat.label}</span>
      </div>
    </article>
  );
}

export default function CourseHero() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counterRun, setCounterRun] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setIsVisible(true);
      setCounterRun((run) => run + 1);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setCounterRun((run) => run + 1);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`course-hero ${isVisible ? "course-hero-visible" : ""}`}
      aria-labelledby="course-hero-title"
    >
      <div className="course-hero-decoration course-hero-decoration-left" aria-hidden="true" />
      <div className="course-hero-decoration course-hero-decoration-right" aria-hidden="true" />

      <div className="course-hero-container">
        <div className="course-hero-content">
          <div className="course-hero-eyebrow course-reveal">
            <span>EXPLORE</span><span className="course-hero-dot">•</span>
            <span>LEARN</span><span className="course-hero-dot">•</span>
            <span>BUILD</span>
          </div>

          <h1 id="course-hero-title" className="course-reveal">
            Build Skills.
            <span>Create Projects.</span>
            Shape the Future.
          </h1>

          <p className="course-hero-description course-reveal">
            Learn IoT, electronics, robotics, coding and AI through practical,
            project-based courses designed for curious young learners.
          </p>

          <div className="course-hero-actions course-reveal">
            <Link to="/courses" className="course-hero-primary">
              <GraduationCap size={22} strokeWidth={2.2} />
              <span>Explore Courses</span>
              <ArrowRight size={20} strokeWidth={2.5} />
            </Link>

            <a href="#course-learning" className="course-hero-secondary">
              <span className="course-hero-play"><Play size={15} fill="currentColor" /></span>
              <span>Discover Learning</span>
            </a>
          </div>
        </div>

        <div className="course-hero-visual course-reveal">
          <div className="course-hero-visual-glow" aria-hidden="true" />
          <img
            src={courseHeroImage}
            alt="Robotics rover, coding laptop, friendly robot and electronics learning equipment"
            className="course-hero-image"
            fetchPriority="high"
          />

          {floatingTopics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.label}
                className={`course-topic ${topic.className}`}
                style={{ "--topic-delay": `${index * 0.3}s` }}
              >
                <span className="course-topic-icon"><Icon size={25} strokeWidth={2.3} /></span>
                <span className="course-topic-label">{topic.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="course-hero-stats" key={counterRun}>
        {stats.map((stat, index) => (
          <div
            className={`course-stat-reveal ${isVisible ? "stat-visible" : ""}`}
            style={{ "--stat-delay": `${index * 100}ms` }}
            key={stat.label}
          >
            <StatCard stat={stat} active={isVisible} />
          </div>
        ))}
      </div>
    </section>
  );
}
