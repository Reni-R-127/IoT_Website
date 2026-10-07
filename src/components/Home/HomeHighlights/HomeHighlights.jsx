import {
  ShieldCheck,
  Sparkles,
  Cpu,
  Wrench,
} from "lucide-react";

import "./HomeHighlights.css";

const highlights = [
  {
    title: "Hands-on Learning",
    text: "Learn by making and experimenting.",
    icon: Cpu,
  },
  {
    title: "Real Projects",
    text: "Turn concepts into working ideas.",
    icon: Wrench,
  },
  {
    title: "Expert Guidance",
    text: "Build with clear, supportive guidance.",
    icon: ShieldCheck,
  },
  {
    title: "Future-Ready Skills",
    text: "Explore skills for tomorrow's technology.",
    icon: Sparkles,
  },
];

export default function HomeHighlights() {
  return (
    <section className="home-highlights">

      {highlights.map((item, index) => {

        const Icon = item.icon;

        return (
          <div
            className="highlight-card"
            key={item.title}
            data-animate="pop"
            data-delay={index + 1}
          >

            <Icon />

            <div>
              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>

          </div>
        );
      })}

    </section>
  );
}