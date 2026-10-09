import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Search,
  GraduationCap,
  Users,
  Settings,
  CreditCard,
  Package,
  Award,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

import faqHeroImage from "../../../assets/FAQ/FAQHero/faq-hero.png";
import "./FAQHero.css";

const categories = [
  {
    name: "Courses",
    subtitle: "Curriculum & topics",
    icon: GraduationCap,
    color: "blue",
  },
  {
    name: "Age & Levels",
    subtitle: "Who can join?",
    icon: Users,
    color: "orange",
  },
  {
    name: "Learning",
    subtitle: "Class format & support",
    icon: Settings,
    color: "purple",
  },
  {
    name: "Fees & Enrollment",
    subtitle: "Payments & registration",
    icon: CreditCard,
    color: "pink",
  },
  {
    name: "Kits & Materials",
    subtitle: "Components & kits",
    icon: Package,
    color: "green",
  },
  {
    name: "Certificates",
    subtitle: "Completion & recognition",
    icon: Award,
    color: "yellow",
  },
];

const questions = [
  {
    category: "Courses",
    question: "What age group can join?",
    answer:
      "Our courses are designed for students from 7–16 years. We offer age-based batches with content tailored to different learning levels, so every student can learn comfortably and build projects at their own pace.",
  },
  {
    category: "Courses",
    question: "Does my child need previous coding knowledge?",
    answer:
      "No previous coding experience is required for beginner courses. Students can start with the fundamentals and progress through practical activities at a comfortable pace.",
  },
  {
    category: "Courses",
    question: "What will my child learn?",
    answer:
      "Students can explore coding, electronics, IoT, robotics and other technology concepts through structured lessons and hands-on projects.",
  },
  {
    category: "Learning",
    question: "Are the classes practical?",
    answer:
      "Our learning approach focuses on practical activities and project-based learning to help students apply the concepts they learn.",
  },
  {
    category: "Kits & Materials",
    question: "What materials are required?",
    answer:
      "Required materials depend on the selected course. Course-specific information can be shared before enrollment.",
  },
  {
    category: "Kits & Materials",
    question: "Do you provide learning kits?",
    answer:
      "Learning kit requirements depend on the course. Contact our team to confirm the components and kit options available for your selected program.",
  },
  {
    category: "Age & Levels",
    question: "How are students grouped by age?",
    answer:
      "Students are guided toward suitable learning levels based on their age, experience and the requirements of the selected course.",
  },
  {
    category: "Learning",
    question: "Will students receive guidance?",
    answer:
      "Students receive guidance throughout their learning activities to help them understand concepts and work through their projects.",
  },
  {
    category: "Fees & Enrollment",
    question: "How can I enroll in a course?",
    answer:
      "Explore the available courses and contact our team to learn about enrollment, schedules and the next steps.",
  },
  {
    category: "Fees & Enrollment",
    question: "How can I know the course fees?",
    answer:
      "Course fees can vary by program. Contact our team for the latest pricing and enrollment details.",
  },
  {
    category: "Certificates",
    question: "Will students receive a certificate?",
    answer:
      "Certificate availability depends on the selected program. Please confirm the details with our team before enrolling.",
  },
];

export default function FAQHero() {
  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState("Courses");
  const [openQuestion, setOpenQuestion] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const filteredQuestions = questions.filter((item) => {
    const matchesCategory = item.category === activeCategory;
    const query = searchText.trim().toLowerCase();

    const matchesSearch =
      !query ||
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const handleSearch = (event) => {
    event.preventDefault();

    const query = searchText.trim().toLowerCase();

    if (!query) {
      setActiveCategory("Courses");
      setOpenQuestion(0);
      return;
    }

    const matchingQuestion = questions.find(
      (item) =>
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );

    if (matchingQuestion) {
      setActiveCategory(matchingQuestion.category);
      setOpenQuestion(
        questions
          .filter((item) => item.category === matchingQuestion.category)
          .findIndex((item) => item === matchingQuestion)
      );
    } else {
      setActiveCategory("Courses");
      setOpenQuestion(-1);
    }

    document.querySelector("#faq-list")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setOpenQuestion(0);
  };

  return (
    <section
      ref={sectionRef}
      className={`faq-page ${visible ? "faq-page-visible" : ""}`}
      aria-label="Frequently asked questions"
    >
      <div className="faq-page-background-circle faq-circle-left" />
      <div className="faq-page-background-circle faq-circle-right" />

      {/* Hero section */}
      <div className="faq-hero">
        <div className="faq-hero-container">
          <div className="faq-hero-content">
            <div className="faq-hero-eyebrow">
              <span>FAQS</span>
              <span className="faq-hero-eyebrow-line" />
            </div>

            <h1 id="faq-hero-title">
              Have Questions?
            </h1>

            <p className="faq-hero-description">
              Find quick answers about our courses, learning approach,
              age groups, enrollment and more.
            </p>

            <form className="faq-hero-search" onSubmit={handleSearch}>
              <Search
                className="faq-hero-search-icon"
                size={25}
                aria-hidden="true"
              />

              <input
                type="search"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                placeholder="Search for your question..."
                aria-label="Search frequently asked questions"
              />

              <button type="submit" aria-label="Search FAQs">
                <ArrowRight size={24} />
              </button>
            </form>
          </div>

          <div className="faq-hero-visual">
            <div className="faq-hero-image-glow" aria-hidden="true" />

            <img
              src={faqHeroImage}
              alt="Friendly robot, question marks, books and technology projects"
              className="faq-hero-image"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      {/* FAQ content continues directly below the hero */}
      <div className="faq-content-container" id="faq-list">
        <aside className="faq-category-panel" aria-label="FAQ categories">
          {categories.map((category) => {
            const Icon = category.icon;
            const selected = activeCategory === category.name;

            return (
              <button
                type="button"
                key={category.name}
                className={`faq-category ${
                  selected ? "faq-category-active" : ""
                }`}
                onClick={() => handleCategoryChange(category.name)}
                aria-pressed={selected}
              >
                <span className={`faq-category-icon ${category.color}`}>
                  <Icon size={25} strokeWidth={2.3} />
                </span>

                <span className="faq-category-copy">
                  <strong>{category.name}</strong>
                  <small>{category.subtitle}</small>
                </span>

                <ChevronRight
                  className="faq-category-arrow"
                  size={21}
                />
              </button>
            );
          })}
        </aside>

        <div className="faq-questions-panel">
          <div className="faq-questions-header">
            <div>
              <span className="faq-panel-eyebrow">
                {activeCategory}
              </span>
              <h2>Frequently asked questions</h2>
            </div>

            <form
              className="faq-panel-search"
              onSubmit={handleSearch}
            >
              <Search size={20} aria-hidden="true" />
              <input
                type="search"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                placeholder="Search your question..."
                aria-label="Filter questions"
              />
            </form>
          </div>

          <div className="faq-question-list">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((item, index) => {
                const isOpen = openQuestion === index;

                return (
                  <article
                    className={`faq-question ${
                      isOpen ? "faq-question-open" : ""
                    }`}
                    key={item.question}
                  >
                    <button
                      type="button"
                      className="faq-question-trigger"
                      onClick={() =>
                        setOpenQuestion(isOpen ? -1 : index)
                      }
                      aria-expanded={isOpen}
                    >
                      <span className="faq-question-mark">Q</span>
                      <span className="faq-question-title">
                        {item.question}
                      </span>
                      <ChevronDown
                        className="faq-question-chevron"
                        size={21}
                      />
                    </button>

                    {isOpen && (
                      <div className="faq-answer">
                        <span className="faq-answer-mark">A</span>
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </article>
                );
              })
            ) : (
              <div className="faq-empty-state">
                <Search size={30} />
                <h3>No matching questions found</h3>
                <p>
                  Try another search term or select a different category.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchText("");
                    setActiveCategory("Courses");
                    setOpenQuestion(0);
                  }}
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}