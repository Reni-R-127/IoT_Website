import { useEffect } from "react";

import { Link, useParams } from "react-router-dom";

import {

  CalendarDays,

  Clock3,

  Facebook,

  Linkedin,

  Link as LinkIcon,

  ArrowLeft,

} from "lucide-react";



import blogImage1 from "../../../assets/Blog/Blogs/Blogs-1.png";

import blogImage2 from "../../../assets/Blog/Blogs/Blogs-2.png";

import blogImage3 from "../../../assets/Blog/Blogs/Blogs-3.png";

import blogImage4 from "../../../assets/Blog/Blogs/Blogs-4.png";

import blogImage5 from "../../../assets/Blog/Blogs/Blogs-5.png";

import blogImage6 from "../../../assets/Blog/Blogs/Blogs-6.png";

import blogRobot from "../../../assets/Blog/Blogs/blog-robot.png";



import "./BlogDetail.css";



const articles = {

  1: {

    category: "IoT",

    title: "How IoT Helps in Real Life?",

    date: "Oct 05, 2026",

    readTime: "5 min read",

    description:

      "Discover how the Internet of Things is used in everyday life, with simple examples that kids can understand and relate to.",

    hero: blogImage1,

    sections: [

      {

        title: "What is IoT?",

        paragraphs: [

          "The Internet of Things (IoT) means connecting everyday devices to the internet so they can collect and share data. These devices can be sensors, home appliances, vehicles and many more.",

          "IoT helps make our lives easier, safer and smarter by allowing devices to communicate and respond to information.",

        ],

        image: blogImage3,

        imageAlt: "A model smart home showing connected technology",

      },

      {

        title: "How Does IoT Work?",

        paragraphs: [

          "IoT devices use sensors to collect information from their surroundings. For example, a temperature sensor can measure how hot or cold a room is.",

          "The collected data can be sent through a network to an application, where users can view information and control compatible devices.",

        ],

        image: blogRobot,

        imageAlt: "A child exploring technology with a friendly robot",

      },

      {

        title: "Real-Life Examples",

        paragraphs: [

          "Smart lights, fitness trackers, connected security cameras and automatic watering systems are examples of IoT in everyday life.",

          "A smart plant-watering system can use a soil moisture sensor to check whether a plant needs water and activate a pump when necessary.",

        ],

      },

      {

        title: "Benefits of IoT",

        paragraphs: [

          "IoT can save time, improve convenience, help monitor conditions and support better decisions using collected data.",

          "Connected devices should also be configured securely. Strong passwords, trusted networks and privacy-aware settings are important.",

        ],

      },

      {

        title: "Fun Projects for Kids",

        paragraphs: [

          "Young learners can explore IoT by building a temperature monitor, a smart plant-watering system or a light that responds to its surroundings.",

          "Start with a simple sensor, observe its readings and gradually add more features as your understanding grows.",

        ],

      },

      {

        title: "Conclusion",

        paragraphs: [

          "IoT connects the physical world with digital technology. Learning through small projects helps children understand how sensors, networks and code work together.",

        ],

      },

    ],

  },



  2: {

    category: "Kids Projects",

    title: "5 Fun IoT Projects Kids Can Build",

    date: "Oct 03, 2026",

    readTime: "6 min read",

    description:

      "Explore beginner-friendly project ideas using sensors, microcontrollers and simple coding.",

    hero: blogImage2,

    sections: [

      {

        title: "Why Build IoT Projects?",

        paragraphs: [

          "Building projects gives children a practical way to explore electronics, coding and problem-solving.",

          "Start with a clear goal, connect a sensor and test how the device responds to changes around it.",

        ],

        image: blogImage2,

        imageAlt: "A small electronics and robotics project",

      },

      {

        title: "Smart Plant Monitor",

        paragraphs: [

          "Use a soil moisture sensor to measure how wet or dry the soil is. Display the reading and use it to decide when a plant needs water.",

        ],

      },

      {

        title: "Automatic Night Light",

        paragraphs: [

          "Use a light sensor to detect darkness and switch on an LED. This project introduces sensor readings and conditional logic.",

        ],

      },

      {

        title: "Temperature Monitor",

        paragraphs: [

          "Connect a temperature sensor to a microcontroller and display the current reading. Observe how the values change in different environments.",

        ],

      },

      {

        title: "Obstacle Detection",

        paragraphs: [

          "Use an ultrasonic sensor to measure distance and trigger a buzzer or LED when an object comes close.",

        ],

      },

      {

        title: "Smart Room Project",

        paragraphs: [

          "Combine a sensor and an output device to create a simple room-monitoring model. Build and test one feature at a time.",

        ],

      },

      {

        title: "Conclusion",

        paragraphs: [

          "These beginner projects help learners practise wiring, coding, testing and improving their own ideas. Always follow appropriate electrical safety guidance.",

        ],

      },

    ],

  },



  3: {

    category: "IoT",

    title: "How Do Smart Homes Work?",

    date: "Sep 29, 2026",

    readTime: "5 min read",

    description:

      "Learn how connected lights, sensors and appliances help make homes smarter.",

    hero: blogImage3,

    sections: [

      {

        title: "What Is a Smart Home?",

        paragraphs: [

          "A smart home uses connected devices that can be monitored or controlled through a phone, computer or automated system.",

          "Examples include smart lights, connected plugs, security sensors and temperature controls.",

        ],

        image: blogImage3,

        imageAlt: "Smart home model with connected devices",

      },

      {

        title: "How Does It Work?",

        paragraphs: [

          "Sensors collect information, a controller processes it, and a connected device performs an action. Some devices also communicate with an application over a network.",

        ],

      },

      {

        title: "Examples Around the Home",

        paragraphs: [

          "A motion sensor can turn on a light when someone enters a room. A temperature sensor can help a compatible controller manage room temperature.",

        ],

      },

      {

        title: "Benefits and Safety",

        paragraphs: [

          "Smart-home technology can improve convenience and help monitor devices. Secure passwords, software updates and careful privacy settings remain important.",

        ],

      },

      {

        title: "Try a Simple Project",

        paragraphs: [

          "Build a small model room using a light sensor and LED. Test how the LED behaves as the light level changes.",

        ],

      },

      {

        title: "Conclusion",

        paragraphs: [

          "Smart homes combine sensors, controllers and connected devices to automate everyday tasks.",

        ],

      },

    ],

  },



  4: {

    category: "Electronics",

    title: "Arduino for Beginners",

    date: "Sep 20, 2026",

    readTime: "6 min read",

    description:

      "Discover Arduino, its basic components and how to create your first electronics project.",

    hero: blogImage4,

    sections: [

      {

        title: "What Is Arduino?",

        paragraphs: [

          "Arduino is a popular electronics platform that lets learners program a microcontroller board to interact with sensors and other components.",

          "It is often used for learning basic electronics, automation and robotics.",

        ],

        image: blogImage4,

        imageAlt: "Arduino board and electronic components",

      },

      {

        title: "Components You Need",

        paragraphs: [

          "A beginner setup may include an Arduino-compatible board, USB cable, LED, resistor and jumper wires. Additional sensors can be added as your skills grow.",

        ],

      },

      {

        title: "Write Your First Program",

        paragraphs: [

          "A common first project makes an LED blink. The program switches the output on, waits for a short time, switches it off and repeats.",

        ],

      },

      {

        title: "Connect Sensors",

        paragraphs: [

          "Sensors let a program react to information such as light, distance or temperature. Read the sensor value and use it to control an output.",

        ],

      },

      {

        title: "Project Ideas",

        paragraphs: [

          "Try a traffic light model, distance alarm or automatic night light to practise wiring and programming.",

        ],

      },

      {

        title: "Conclusion",

        paragraphs: [

          "Arduino makes it easier to experiment with electronics and learn how software can control physical devices.",

        ],

      },

    ],

  },



  5: {

    category: "AI",

    title: "AI for Kids",

    date: "Sep 15, 2026",

    readTime: "5 min read",

    description:

      "Understand artificial intelligence through familiar examples and simple activities.",

    hero: blogImage5,

    sections: [

      {

        title: "What Is Artificial Intelligence?",

        paragraphs: [

          "Artificial intelligence (AI) is a field of technology that develops systems capable of performing tasks such as recognising patterns, processing language or making predictions.",

          "AI systems learn patterns from data, but they can still make mistakes and should not be assumed to know everything.",

        ],

        image: blogImage5,

        imageAlt: "Friendly robot representing artificial intelligence",

      },

      {

        title: "AI in Everyday Life",

        paragraphs: [

          "Examples include voice assistants, recommendation systems, image recognition and tools that help people organise information.",

        ],

      },

      {

        title: "How Does AI Learn?",

        paragraphs: [

          "Many AI systems use examples to identify patterns. The quality and variety of the examples can affect how well the system works.",

        ],

      },

      {

        title: "Try an AI Activity",

        paragraphs: [

          "Sort objects into categories, describe the rules you used and compare your method with a simple classification tool. Discuss where mistakes might happen.",

        ],

      },

      {

        title: "Use AI Responsibly",

        paragraphs: [

          "Protect personal information, check important answers and ask a trusted adult for help when using online tools.",

        ],

      },

      {

        title: "Conclusion",

        paragraphs: [

          "Learning AI starts with curiosity, careful observation and understanding both what technology can do and where it has limitations.",

        ],

      },

    ],

  },



  6: {

    category: "Robotics",

    title: "How Sensors Work?",

    date: "Sep 10, 2026",

    readTime: "5 min read",

    description:

      "Learn how sensors detect changes and help electronic devices respond to the world.",

    hero: blogImage6,

    sections: [

      {

        title: "What Is a Sensor?",

        paragraphs: [

          "A sensor detects a physical condition and converts it into information that an electronic system can use.",

          "Different sensors can measure light, temperature, distance, movement and many other conditions.",

        ],

        image: blogImage6,

        imageAlt: "Electronic sensors used in learning projects",

      },

      {

        title: "How Does a Sensor Work?",

        paragraphs: [

          "A sensor responds to a condition in its environment and produces a signal. A controller reads the signal and decides what action to take.",

        ],

      },

      {

        title: "Common Types of Sensors",

        paragraphs: [

          "Light sensors detect brightness, temperature sensors measure heat, and ultrasonic sensors estimate distance using sound waves.",

        ],

      },

      {

        title: "Sensors in Robotics",

        paragraphs: [

          "Robots can use sensors to detect obstacles, follow lines or respond to changes in their surroundings.",

        ],

      },

      {

        title: "Build a Simple Project",

        paragraphs: [

          "Connect a sensor to a suitable microcontroller and use an LED or buzzer to indicate when a reading crosses a chosen threshold.",

        ],

      },

      {

        title: "Conclusion",

        paragraphs: [

          "Sensors help electronic systems observe the world. Experimenting with simple sensor projects is a practical way to learn how they work.",

        ],

      },

    ],

  },

};




// Fallback images for sections that do not define a dedicated project image.
const sectionImages = [
  blogImage1,
  blogImage2,
  blogImage3,
  blogImage4,
  blogImage5,
  blogImage6,
  blogRobot,
];

function makeSectionId(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function BlogDetail() {
  const { id } = useParams();
  const article = articles[id];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [id]);

  if (!article) {
    return (
      <main className="blog-detail-not-found">
        <h1>Article not found</h1>
        <p>This blog article may have been removed or the link is incorrect.</p>
        <Link to="/blog">
          <ArrowLeft size={18} />
          Back to Blogs
        </Link>
      </main>
    );
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = encodeURIComponent(article.title);
  const encodedUrl = encodeURIComponent(shareUrl);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      window.prompt("Copy this article link:", shareUrl);
    }
  };

  return (
    <main className="blog-detail-page">
      <section
        className="blog-detail-hero"
        style={{ "--blog-detail-hero-image": `url("${article.hero}")` }}
      >
        <div className="blog-detail-hero-overlay" />
        <div className="blog-detail-hero-content">
          <span className="blog-detail-category">{article.category}</span>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </div>
      </section>

      <div className="blog-detail-meta-wrap">
        <div className="blog-detail-meta">
          <div className="blog-detail-author">
            <span className="blog-detail-author-avatar">P</span>
            <span>By ProJenius Team</span>
          </div>

          <span className="blog-detail-meta-item">
            <CalendarDays size={17} />
            <time>{article.date}</time>
          </span>

          <span className="blog-detail-meta-item">
            <Clock3 size={17} />
            {article.readTime}
          </span>

          <div className="blog-detail-share">
            <span>Share:</span>
            <a
              className="blog-share-facebook"
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Share on Facebook"
            >
              <Facebook size={16} fill="currentColor" />
            </a>
            <a
              className="blog-share-x"
              href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareText}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Share on X"
            >
              X
            </a>
            <a
              className="blog-share-linkedin"
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Share on LinkedIn"
            >
              <Linkedin size={15} fill="currentColor" />
            </a>
            <button
              className="blog-share-copy"
              type="button"
              onClick={handleCopyLink}
              aria-label="Copy article link"
              title="Copy article link"
            >
              <LinkIcon size={15} />
            </button>
          </div>
        </div>
      </div>

      <div className="blog-detail-layout">
        <article className="blog-detail-article">
          <div className="blog-detail-intro">
            <span>INSIDE THIS ARTICLE</span>
            <p>
              Explore the concepts, follow the project steps, and discover how
              these ideas work in real life.
            </p>
          </div>

          {article.sections.map((section, index) => {
            const sectionImage =
              section.image ||
              sectionImages[(index + Number(id) - 1) % sectionImages.length];

            return (
              <section
                className={`blog-detail-section ${
                  index % 2 === 1 ? "section-image-left" : "section-image-right"
                }`}
                id={makeSectionId(section.title)}
                key={section.title}
              >
                <div className="blog-detail-section-copy">
                  <span className="blog-detail-step">
                    SECTION {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <figure className="blog-detail-section-visual">
                  <img
                    src={sectionImage}
                    alt={section.imageAlt || section.title}
                    loading="lazy"
                  />
                  <figcaption className="blog-detail-image-index">
                    {String(index + 1).padStart(2, "0")}
                  </figcaption>
                </figure>
              </section>
            );
          })}

          <div className="blog-detail-footer">
            <img src={blogRobot} alt="" loading="lazy" />
            <div>
              <span className="blog-detail-step">KEEP EXPLORING</span>
              <h2>Keep learning. Keep creating.</h2>
              <p>
                Discover more technology concepts and practical project ideas
                for curious young minds.
              </p>
              <Link to="/blog">
                <ArrowLeft size={17} />
                Explore More Blogs
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
