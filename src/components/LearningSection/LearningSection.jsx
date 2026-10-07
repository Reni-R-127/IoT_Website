import { ArrowRight, Sprout } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../Reveal.jsx";
import boy from "../../assets/learning-boy.png";
import girl from "../../assets/learning-girl.png";
import learn from "../../assets/learn-card.png";
import sensor from "../../assets/explore-card.png";
import arduino from "../../assets/build-card.png";
import rocket from "../../assets/create-card.png";
import "./LearningSection.css";

const steps = [
  { number:"01", title:"Learn", text:"Understand how sensors, circuits and IoT work.", image:learn, tone:"blue" },
  { number:"02", title:"Explore", text:"Ask questions and experiment with components.", image:sensor, tone:"yellow" },
  { number:"03", title:"Build", text:"Turn ideas into real IoT projects using sensors, Arduino & ESP32.", image:arduino, tone:"green" },
  { number:"04", title:"Create", text:"Share, improve and innovate by building smart solutions for a better tomorrow.", image:rocket, tone:"purple" },
];

export default function LearningSection(){
  return (
    <section className="learning-section">
      <div className="learning-cloud cloud-one" />
      <div className="learning-cloud cloud-two" />

      <div className="learning-header">
        <Reveal>
          <span className="learning-eyebrow">LEARN BY DOING</span>
          <h2>Technology made practical<br />for <span>curious minds</span></h2>
          <p>A simple path from understanding the idea to building something kids can see, test and improve.</p>
        </Reveal>
      </div>

      <img className="learning-kid kid-boy" src={boy} alt="Child learning technology" />
      <img className="learning-kid kid-girl" src={girl} alt="Child building an electronics project" />

      <div className="learning-cards">
        {steps.map((step,index)=>(
          <Reveal key={step.title} delay={index*100}>
            <article className={`learning-card ${step.tone}`}>
              <div className="learning-number">{step.number}</div>
              <div className="learning-art"><img src={step.image} alt="" /></div>
              <div className="learning-card-content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
              <span className="learning-arrow"><ArrowRight size={19}/></span>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal direction="zoom" className="learning-cta-wrap" delay={160}>
        <div className="learning-cta">
          <div><Sprout size={25}/><strong>Ready to build your first project?</strong></div>
          <Link to="/courses">Explore Our Courses <ArrowRight size={18}/></Link>
        </div>
      </Reveal>
    </section>
  );
}
