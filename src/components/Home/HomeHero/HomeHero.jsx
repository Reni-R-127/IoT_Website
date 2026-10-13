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
import { whatsappUrl } from "../../../config/site.js";

import "./HomeHero.css";

/* =========================================
   HERO HIGHLIGHTS
========================================= */

const highlights = [
  {
    title: "Hands-on Learning",
    text: "Learn by making and experimenting.",
    icon: Cpu,
    className: "highlight-blue",
  },
  {
    title: "Real Projects",
    text: "Turn concepts into working ideas.",
    icon: Wrench,
    className: "highlight-purple",
  },
  {
    title: "Expert Guidance",
    text: "Build with clear, supportive guidance.",
    icon: ShieldCheck,
    className: "highlight-cyan",
  },
  {
    title: "Future-Ready Skills",
    text: "Explore skills for tomorrow's technology.",
    icon: Sparkles,
    className: "highlight-yellow",
  },
];

/* =========================================
   HERO BUTTONS
========================================= */

function HeroActions({ mobile = false }) {
  return (
    <div
      className={`hero-actions${mobile ? " hero-actions-mobile" : ""}`}
      data-animate="fade-up"
    >
      <Link to="/courses" className="primary-btn">
        Explore Courses
        <ArrowRight size={17} />
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
  );
}

export default function HomeHero() {
  return (
    <section className="home-hero">
      {/* HERO EDGE DECORATIONS */}

      <div
        className="hero-edge-circle hero-blue-circle"
        aria-hidden="true"
      />

      <div
        className="hero-edge-circle hero-violet-circle"
        aria-hidden="true"
      />

      {/* HERO CONTENT */}

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
          Give your child hands-on experience with IoT, electronics,
          coding, robotics and emerging technologies through fun and
          practical projects.
        </p>

        {/* Desktop buttons: retain the original position */}
        <div className="hero-actions-desktop">
          <HeroActions />
        </div>
      </div>

      {/* HERO VISUAL */}

      <div
        className="hero-visual"
        aria-label="Technology learning illustration"
        data-animate="zoom"
      >
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />

        {/* DEVICE */}

        <div className="hero-device">
          <div className="device-top">
            <span />
            <span />
            <span />
          </div>

          <div className="device-board">
            <Cpu size={38} />

            <div className="board-line line-a" />
            <div className="board-line line-b" />

            <div className="sensor-dot" />
            <div className="sensor-dot two" />
          </div>

          <div className="device-base" />
        </div>

        {/* FLOATING ICONS */}

        <div className="floating-chip chip-one">
          <Bot size={23} />
        </div>

        <div className="floating-chip chip-two">
          <Zap size={22} />
        </div>

        <div className="floating-chip chip-three">
          <Lightbulb size={21} />
        </div>

        {/* HERO CAPTION */}

        <div className="hero-caption">
          <Sparkles size={16} />
          Build a real project
        </div>
      </div>

      {/* Tablet and mobile buttons: below the visual */}

      <div className="hero-actions-below-visual">
        <HeroActions mobile />
      </div>

      {/* HERO HIGHLIGHTS */}

      <div className="hero-highlights">
        {highlights.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`hero-highlight-card ${item.className}`}
              data-animate="pop"
              data-delay={index + 1}
            >
              <div className="hero-highlight-icon">
                <Icon size={23} />
              </div>

              <div className="hero-highlight-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="hero-highlight-line" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}