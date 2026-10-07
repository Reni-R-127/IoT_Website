import { ArrowRight, Bot, Code2, Cpu, Leaf, MessageCircle, Tag, UserRound, Wifi, Zap, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import { courses } from "../../../data/content.js";
import { whatsappUrl } from "../../../config/site.js";
import Reveal from "../Reveal.jsx";
import courseArduino from "../../../assets/course-arduino.png";
import courseIot from "../../../assets/course-iot.png";
import courseRobotics from "../../../assets/course-robotics.png";
import courseElectronics from "../../../assets/course-electronics.png";
import courseCoding from "../../../assets/course-coding.png";
import courseSmartHome from "../../../assets/course-smart-home.png";
import "./PopularLearning.css";

const icons={wifi:Wifi,cpu:Cpu,bot:Bot,zap:Zap,code:Code2,brain:Cpu,settings:Cpu};
const images={iot:courseIot,arduino:courseArduino,robotics:courseRobotics,electronics:courseElectronics,coding:courseCoding,ai:courseRobotics,"iot-robotics":courseArduino};
const tones={iot:"blue",arduino:"green",robotics:"purple",electronics:"yellow",coding:"pink",ai:"mint","iot-robotics":"purple"};

export default function PopularLearning(){
  return (
    <section className="popular-learning">
      <div className="popular-blob blob-one"/><div className="popular-blob blob-two"/>
      <div className="popular-container">
        <Reveal>
          <header className="popular-heading">
            <span>POPULAR LEARNING</span>
            <h2>Courses built around <strong>making</strong></h2>
            <p>Choose a starting point based on age, interest and experience.</p>
          </header>
        </Reveal>

        <div className="popular-grid">
          {courses.slice(0,6).map((course,index)=>{
            const Icon=icons[course.icon] || Cpu;
            return (
              <Reveal key={course.id} delay={index*80}>
                <article className={`popular-card ${tones[course.id] || "blue"}`}>
                  <div className="popular-top">
                    <div className="popular-icon"><Icon size={25}/></div>
                    <span>{course.level}</span>
                  </div>
                  <div className="popular-main">
                    <div className="popular-copy">
                      <h3>{course.name === "Electronics & Sensors" ? "Electronics Basics" : course.name}</h3>
                      <p>{course.description}</p>
                    </div>
                    <div className="popular-image"><img src={images[course.id] || courseArduino} alt=""/></div>
                  </div>
                  <div className="popular-meta">
                    <span><UserRound size={17}/>{course.age}</span>
                    <span><Clock3 size={17}/>{course.duration}</span>
                    <span><Tag size={17}/>{course.price}</span>
                  </div>
                  <div className="popular-actions">
                    <Link to={`/courses/${course.id}`}>View Details <ArrowRight size={16}/></Link>
                    <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Enroll</a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
