import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  Brain,
  Code2,
  Cpu,
  Settings,
  Wifi,
  Zap,
  MessageCircle,
} from "lucide-react";
import { whatsappUrl } from "../../config/site.js";
import "./CourseCard.css";

const icons = {
  wifi: Wifi,
  cpu: Cpu,
  bot: Bot,
  zap: Zap,
  code: Code2,
  brain: Brain,
  settings: Settings,
};

export default function CourseCard({ course, index = 0 }) {
  const Icon = icons[course.icon] || Cpu;
  const delay = (index % 8) + 1;

  return (
    <article className="course-card" data-animate="pop" data-delay={delay}>
      <div className="course-icon">
        <Icon size={25} />
      </div>
      <span className="course-level">{course.level}</span>
      <h3>{course.name}</h3>
      <p>{course.description}</p>
      <div className="course-meta">
        <span>
          <b>Age</b>
          {course.age}
        </span>
        <span>
          <b>Duration</b>
          {course.duration}
        </span>
        <span>
          <b>Price</b>
          {course.price}
        </span>
      </div>
      <div className="course-actions">
        <Link to={`/courses/${course.id}`} className="course-details">
          View Details <ArrowRight size={15} />
        </Link>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="course-enroll"
        >
          <MessageCircle size={15} /> Enroll
        </a>
      </div>
    </article>
  );
}
