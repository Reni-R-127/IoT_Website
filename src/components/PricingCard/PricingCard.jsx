import { Check, MessageCircle } from "lucide-react";
import { whatsappUrl } from "../../config/site.js";
import "./PricingCard.css";

export default function PricingCard({ plan }) {
  return (
    <article className={`pricing-card ${plan.popular ? "popular" : ""}`}>
      {plan.popular && <span className="popular-badge">Most Popular</span>}
      <span className="pricing-audience">{plan.audience}</span>
      <h3>{plan.name}</h3>
      <div className="pricing-price">{plan.price}</div>
      <div className="pricing-duration">{plan.duration}</div>
      <ul>
        {plan.features.map(item => <li key={item}><Check size={16}/>{item}</li>)}
      </ul>
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="pricing-enroll">
        <MessageCircle size={16}/> Enroll Now
      </a>
    </article>
  );
}
