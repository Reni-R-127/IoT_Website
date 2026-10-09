import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Box,
  Users,
  Cpu,
  Lightbulb,
  BarChart3,
  Star,
  BadgeCheck,
} from "lucide-react";

import whoWeAreImage from "../../../assets/About/WhoWeAre/who-we-are.png";
import "./WhoWeAre.css";

const featureCards = [
  {
    title: "Hands-on Learning",
    text: "Learn by doing and experimenting.",
    icon: Cpu,
    className: "who-feature-blue",
  },
  {
    title: "Learn by Creating",
    text: "Turn ideas into real projects.",
    icon: Lightbulb,
    className: "who-feature-yellow",
  },
  {
    title: "Future-Ready Skills",
    text: "Build skills for a brighter tomorrow.",
    icon: BarChart3,
    className: "who-feature-purple",
  },
];

const stats = [
  {
    value: 6,
    suffix: "+",
    label: "Learning Areas",
    icon: BookOpen,
    className: "who-stat-blue",
  },
  {
    value: 20,
    suffix: "+",
    label: "Practical Projects",
    icon: Box,
    className: "who-stat-green",
  },
  {
    value: 100,
    suffix: "%",
    label: "Hands-on Approach",
    icon: Users,
    className: "who-stat-purple",
  },
];

const trustItems = [
  {
    value: 4.9,
    suffix: "/5",
    label: "Student Reviews",
    type: "rating",
    icon: Star,
    className: "who-trust-rating",
  },
  {
    value: 200,
    suffix: "+",
    label: "Students Trained",
    type: "students",
    icon: Users,
    className: "who-trust-students",
  },
  {
    value: null,
    suffix: "",
    label: "Certified Trainers",
    type: "certified",
    icon: BadgeCheck,
    className: "who-trust-certified",
  },
];

function useCountUp(target, active, decimals = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }

    let frameId;
    let startTime;

    const duration = 1400;
    const animate = (timestamp) => {
      if (startTime === undefined) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = target * eased;
      const precision = 10 ** decimals;

      setCount(
        Math.round(nextValue * precision) / precision
      );

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [target, active, decimals]);

  return count;
}

function StatItem({ item, active }) {
  const Icon = item.icon;
  const count = useCountUp(item.value, active);

  return (
    <div className={`who-stat ${item.className}`}>
      <Icon className="who-stat-icon" size={39} />

      <div className="who-stat-content">
        <strong>
          {count}{item.suffix}
        </strong>
        <span>{item.label}</span>
      </div>
    </div>
  );
}

function TrustItem({ item, active }) {
  const Icon = item.icon;
  const decimals = item.type === "rating" ? 1 : 0;
  const count = useCountUp(
    item.value ?? 0,
    active && item.value !== null,
    decimals
  );

  const displayValue =
    item.type === "certified"
      ? "✓"
      : `${count}${item.suffix}`;

  return (
    <article className={`who-trust-card ${item.className}`}>
      <div className="who-trust-icon">
        <Icon size={25} strokeWidth={2.3} />
      </div>

      <div className="who-trust-copy">
        <strong>{displayValue}</strong>
        <span>{item.label}</span>
      </div>
    </article>
  );
}

export default function WhoWeAre() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`who-we-are ${isVisible ? "who-is-visible" : ""}`}
    >
      <div className="who-circle who-circle-top-left" aria-hidden="true" />
      <div className="who-circle who-circle-top-right" aria-hidden="true" />
      <div className="who-circle who-circle-bottom-left" aria-hidden="true" />
      <div className="who-circle who-circle-bottom-right" aria-hidden="true" />

      <div className="who-we-are-container">
        {/* LEFT CONTENT */}
        <div className="who-content">
          <div className="who-heading-row">
            <span className="who-eyebrow">WHO WE ARE</span>
            <span className="who-eyebrow-line" />
          </div>

          <h2>
            Learning becomes
            <br />
            powerful when kids
            <br />
            get to <strong>build.</strong>
          </h2>

          <p className="who-description">
            We create hands-on learning experiences around IoT,
            electronics, Arduino, sensors, robotics, coding and AI.
            Our goal is to make technology learning simple,
            practical and exciting for every child.
          </p>

          {/* FEATURE CARDS */}
          <div className="who-feature-grid">
            {featureCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`who-feature-card ${item.className}`}
                  style={{ "--card-order": index }}
                >
                  <div className="who-feature-icon">
                    <Icon size={28} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>

          {/* EXISTING DYNAMIC STATISTICS */}
          {/* <div className="who-stats">
            {stats.map((item) => (
              <StatItem
                key={item.label}
                item={item}
                active={isVisible}
              />
            ))}
          </div> */}

          {/* NEW TRUST INDICATORS */}
          <div className="who-trust-grid">
            {trustItems.map((item) => (
              <TrustItem
                key={item.type}
                item={item}
                active={isVisible}
              />
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="who-visual">
          <div className="who-image-glow" aria-hidden="true" />
          <div className="who-orbit who-orbit-one" aria-hidden="true" />
          <div className="who-orbit who-orbit-two" aria-hidden="true" />

          <img
            src={whoWeAreImage}
            alt="Children learning and building technology projects"
            className="who-image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
