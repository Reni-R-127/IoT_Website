import { useParams } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { courses } from "../../data/content.js";
import { whatsappUrl } from "../../config/site.js";
import PageHero from "../../components/PageHero/PageHero.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import CourseCard from "../../components/CourseCard/CourseCard.jsx";
import CTASection from "../../components/CTASection/CTASection.jsx";
import "./Courses.css";

export function Courses() {
  return (
    <>
      <PageHero
        eyebrow="Courses"
        title="Learn technology by building with it."
        text="Explore practical courses across IoT, electronics, Arduino, robotics, coding and AI."
      />
      <main className="courses-page">
        <SectionTitle
          eyebrow="Course library"
          title="Choose a learning path"
          text="Each course can be customized later with your real age groups, duration, price and delivery mode."
        />
        <div className="all-courses-grid">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </main>
      <CTASection />
    </>
  );
}

export function CourseDetails() {
  const { courseId } = useParams();
  const course = courses.find((item) => item.id === courseId);

  if (!course)
    return (
      <div className="not-found-course">
        <h1>Course not found</h1>
        <Link to="/courses">Back to Courses</Link>
      </div>
    );

  return (
    <main className="course-detail-page" data-animate="fade-up">
      <Link to="/courses" className="back-link">
        <ArrowLeft size={16} /> Back to Courses
      </Link>
      <div className="course-detail-grid">
        <div className="course-detail-art" data-animate="zoom">⚙️</div>
        <div data-animate="fade-right">
          <span className="course-detail-level">{course.level}</span>
          <h1>{course.name}</h1>
          <p>{course.description}</p>
          <div className="detail-stats">
            <div>
              <b>Age Group</b>
              {course.age}
            </div>
            <div>
              <b>Duration</b>
              {course.duration}
            </div>
            <div>
              <b>Price</b>
              {course.price}
            </div>
          </div>
          <ul>
            <li>Practical activities and guided projects</li>
            <li>Age-appropriate explanations</li>
            <li>Hands-on experimentation</li>
            <li>Project guidance</li>
          </ul>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="detail-enroll"
          >
            <MessageCircle size={17} /> Enroll Now on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
