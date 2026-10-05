import { pricingPlans } from "../../data/content.js";
import PricingCard from "../../components/PricingCard/PricingCard.jsx";
import PageHero from "../../components/PageHero/PageHero.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import CTASection from "../../components/CTASection/CTASection.jsx";
import "./Pricing.css";

export default function Pricing() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Simple plans for every stage of learning." text="Keep pricing easy to understand. Replace the placeholders with your actual course and program prices." />
      <main className="pricing-page">
        <SectionTitle eyebrow="Choose a plan" title="Start small or go deeper" text="Every plan is designed around practical learning and project work." />
        <div className="pricing-grid">{pricingPlans.map(plan => <PricingCard key={plan.name} plan={plan}/>)}</div>
        <p className="pricing-note">Prices shown as placeholders. Replace ₹XXXX with your actual pricing before publishing.</p>
      </main>
      <CTASection />
    </>
  );
}
