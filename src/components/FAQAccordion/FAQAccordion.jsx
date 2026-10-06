import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./FAQAccordion.css";

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="faq-list">
      {items.map(([question, answer], index) => (
        <div
          className={`faq-item ${open === index ? "open" : ""}`}
          key={question}
          data-animate="fade-up"
          data-delay={(index % 8) + 1}
        >
          <button onClick={() => setOpen(open === index ? null : index)}>
            <span>{question}</span><ChevronDown size={19}/>
          </button>
          {open === index && <div className="faq-answer"><p>{answer}</p></div>}
        </div>
      ))}
    </div>
  );
}
