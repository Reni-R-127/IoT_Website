import { Lightbulb, Brain, Code2, Cpu, Radio, Bot, CircuitBoard, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { whatsappUrl } from "../../config/site.js";
import PageHero from "../../components/PageHero/PageHero.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import CTASection from "../../components/CTASection/CTASection.jsx";
import "./About.css";

const topics = [
  ["IoT", Radio], ["Electronics", CircuitBoard], ["Arduino", Cpu], ["Sensors", Radio],
  ["Robotics", Bot], ["Coding", Code2], ["Artificial Intelligence", Brain]
];

export default function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="Technology learning that children can experience, not just watch." text="We are a technology education initiative focused on helping children understand and build with modern technology." />
      <main className="about-page">
        <section className="about-intro">
          <div><span className="eyebrow">Who we are</span><h2>Learning becomes powerful when kids get to build.</h2></div>
          <p>We create hands-on learning experiences around IoT, electronics, Arduino, sensors, robotics, coding and AI. The goal is to make technology learning simple, practical and exciting for every child.</p>
        </section>

        <section className="mission-card">
          <Lightbulb size={30}/>
          <div><span>Our Mission</span><h2>To make technology learning simple, practical and exciting for every child.</h2></div>
        </section>

        <section className="about-section">
          <SectionTitle eyebrow="What we teach" title="Explore the technology behind everyday ideas" />
          <div className="topic-grid">{topics.map(([name, Icon]) => <div key={name}><Icon/><b>{name}</b></div>)}</div>
        </section>

        <section className="approach-section">
          <SectionTitle eyebrow="Our learning approach" title="Learn → Explore → Build → Create" />
          <div className="approach-grid">{["Learn", "Explore", "Build", "Create"].map((x,i) => <div key={x}><span>0{i+1}</span><h3>{x}</h3><p>{["Understand the core idea.", "Experiment with tools and questions.", "Build a working project.", "Improve it and make it your own."][i]}</p></div>)}</div>
        </section>

        <section className="benefits-section">
          <div><span className="eyebrow">Why technology?</span><h2>Skills that go beyond the classroom</h2><p>Technology projects encourage children to think, test, make mistakes, solve problems and explain what they built.</p></div>
          <div className="benefit-list">{["Creativity","Problem Solving","Logical Thinking","Practical Skills","Innovation","Confidence"].map(x => <div key={x}><span>✓</span>{x}</div>)}</div>
        </section>

        <div className="about-cta"><Link to="/courses">Explore Courses <ArrowRight size={16}/></Link><a href={whatsappUrl} target="_blank" rel="noreferrer">Enroll Now → WhatsApp</a></div>
      </main>
      <CTASection />
    </>
  );
}
