import {
  ArrowRight,
  Bot,
  Cpu,
  Lightbulb,
  MessageCircle,
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


export default function HomeHero() {
  return (
    <section className="home-hero">

      {/* =========================================
          HERO EDGE DECORATIONS
      ========================================= */}

      <div
        className="hero-edge-circle hero-blue-circle"
        aria-hidden="true"
      ></div>

      <div
        className="hero-edge-circle hero-violet-circle"
        aria-hidden="true"
      ></div>


      {/* =========================================
          HERO CONTENT
      ========================================= */}

      <div
        className="hero-content"
        data-animate="fade-left"
      >

        <span
          className="hero-kicker"
          data-animate="fade-down"
          data-delay="1"
        >
          Kids • STEM • Technology
        </span>


        <h1
          data-animate="fade-up"
          data-delay="2"
        >
          Where Kids <em>Learn, Build</em> & Create with Technology
        </h1>


        <p
          data-animate="fade-up"
          data-delay="3"
        >
          Give your child hands-on experience with IoT, electronics,
          coding, robotics and emerging technologies through fun and
          practical projects.
        </p>


        <div
          className="hero-actions"
          data-animate="fade-up"
          data-delay="4"
        >

          <Link
            to="/courses"
            className="primary-btn"
          >
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

      </div>


      {/* =========================================
          HERO VISUAL
      ========================================= */}

      <div
        className="hero-visual"
        aria-label="Technology learning illustration"
        data-animate="zoom"
      >

        <div className="hero-orbit orbit-one"></div>

        <div className="hero-orbit orbit-two"></div>


        {/* DEVICE */}

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


        {/* =========================================
            FLOATING ICONS
        ========================================= */}

        <div className="floating-chip chip-one">
          <Bot size={23} />
        </div>


        <div className="floating-chip chip-two">
          <Zap size={22} />
        </div>


        <div className="floating-chip chip-three">
          <Lightbulb size={21} />
        </div>


        {/* =========================================
            HERO CAPTION
        ========================================= */}

        <div className="hero-caption">
          <Sparkles size={16} />
          Build a real project
        </div>

      </div>


      {/* =========================================
          HERO HIGHLIGHTS
      ========================================= */}

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

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

                <span className="hero-highlight-line"></span>

              </div>

            </div>
          );

        })}

      </div>

    </section>
  );
}