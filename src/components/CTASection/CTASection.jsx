import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappUrl } from "../../config/site.js";
import "./CTASection.css";

export default function CTASection() {
  return (
    <section className="cta-section">
      <div>
        <span className="cta-eyebrow">Start today</span>
        <h2>Let Your Child Start Building the Future</h2>
        <p>Give your child the opportunity to explore technology through real projects and hands-on learning.</p>
      </div>
      <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Enroll Now <ArrowRight size={17}/></a>
    </section>
  );
}
