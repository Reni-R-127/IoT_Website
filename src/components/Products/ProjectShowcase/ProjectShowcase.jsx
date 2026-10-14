import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, Cloud, Cpu, House, Leaf, Lightbulb, LockKeyhole, Recycle, Sprout, Sun, Wifi, Wrench, HeartPulse } from "lucide-react";
import { wphone } from "../../../config/site.js";
import "./ProjectShowcase.css";
import irrigationImg from "../../../assets/Products/project-irrigation.webp";
import robotImg from "../../../assets/Products/project-robot.webp";
import homeImg from "../../../assets/Products/project-home.webp";
import airImg from "../../../assets/Products/project-air.webp";
import solarImg from "../../../assets/Products/project-solar.webp";
import lineFollowerImg from "../../../assets/Products/project-line-follower.webp";
import securityImg from "../../../assets/Products/project-security.webp";
import weatherImg from "../../../assets/Products/project-weather.webp";
import wearableImg from "../../../assets/Products/project-wearable.webp";
import binImg from "../../../assets/Products/project-bin.webp";

const projects = [
 {title:"Smart IoT Irrigation System",text:"Automatic plant watering based on soil moisture.",category:"Environmental",tag:"Agriculture",icon:Sprout,image:irrigationImg,tone:"green"},
 {title:"Obstacle Avoiding Robot",text:"Detects and avoids obstacles autonomously.",category:"Robotics",tag:"Robotics",icon:Wrench,image:robotImg,tone:"purple"},
 {title:"Smart Home Automation",text:"Control lights, fans and appliances using IoT and mobile app.",category:"Home Automation",tag:"Home Automation",icon:House,image:homeImg,tone:"blue"},
 {title:"Air Quality Monitoring System",text:"Monitor air quality, temperature and humidity in real-time.",category:"Environmental",tag:"Environment",icon:Leaf,image:airImg,tone:"green"},
 {title:"Solar Power Monitoring",text:"Track solar energy generation and usage with IoT.",category:"Energy",tag:"Energy",icon:Sun,image:solarImg,tone:"yellow"},
 {title:"Line Follower Robot",text:"Follows a path using IR sensors.",category:"Robotics",tag:"Robotics",icon:Wrench,image:lineFollowerImg,tone:"blue"},
 {title:"Smart Security System",text:"Motion detection with alerts (SMS/app).",category:"IoT Projects",tag:"Security",icon:LockKeyhole,image:securityImg,tone:"red"},
 {title:"Weather Monitoring Station",text:"Measures temperature, humidity, rainfall and more.",category:"IoT Projects",tag:"Weather",icon:Cloud,image:weatherImg,tone:"blue"},
 {title:"Smart Wearable Alert Kit",text:"Monitors vital signals and sends emergency alerts.",category:"Innovative Ideas",tag:"Healthcare",icon:HeartPulse,image:wearableImg,tone:"red"},
 {title:"Smart E-Bin",text:"Automates solid waste management with IoT.",category:"Environmental",tag:"Waste Management",icon:Recycle,image:binImg,tone:"purple"},
];
const categories=["All Projects","IoT Projects","Robotics","Home Automation","Environmental","Energy","Innovative Ideas"];
export default function ProjectShowcase(){
 const [active,setActive]=useState("All Projects");
 const shown=useMemo(()=>active==="All Projects"?projects:projects.filter(p=>p.category===active),[active]);
 const message=`Hello ProJenius, I want to explore your IoT kits for a project. Please guide me.`;
 return <section className="project-showcase products-shell" id="project-showcase" aria-labelledby="project-title">
  <div className="products-section-heading" data-animate="fade-up"><span className="section-kicker"><i/> Project Showcase <i/></span><h2 id="project-title">What Can You <em>Build?</em></h2><p>From smart home systems to robotics and real-world IoT solutions — here are some<br className="desktop-break"/> exciting projects you can create using our learning kits.</p></div>
  <div className="project-filter-row" role="group" aria-label="Filter projects">{categories.map((cat,index)=><button type="button" key={cat} onClick={()=>setActive(cat)} className={`project-filter ${active===cat?"active":""}`} aria-pressed={active===cat}>{index===0?<Cpu size={18}/>:index===1?<Wifi size={18}/>:index===2?<Wrench size={18}/>:index===3?<House size={18}/>:index===4?<Leaf size={18}/>:index===5?<Sun size={18}/>:<Lightbulb size={18}/>}<span>{cat}</span></button>)}</div>
  <div className="project-grid">{shown.map((project,index)=>{const Icon=project.icon;return <article className="project-card" key={project.title} data-animate="fade-up" data-delay={Math.min(index + 1, 5)}><div className="project-image"><img src={project.image} alt={project.title} loading="lazy"/><span className={`project-tag tag-${project.tone}`}><Icon size={15}/>{project.tag}</span></div><div className="project-card-copy"><h3>{project.title}</h3><p>{project.text}</p><a href={`https://wa.me/${wphone}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer" aria-label={`Ask about ${project.title}`}><ArrowUpRight size={18}/></a></div></article>})}</div>
  <div className="project-cta" data-animate="fade-up"><span className="project-cta-icon"><Lightbulb size={28}/></span><div><strong>Have a project idea?</strong><p>Our kits help you turn your ideas into real working prototypes.</p></div><a href={`https://wa.me/${wphone}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer" className="products-btn products-btn-primary"><Cpu size={19}/> Explore Our Kits <ArrowRight size={18}/></a><span className="project-cta-doodle" aria-hidden="true">〰</span></div>
 </section>;
}
