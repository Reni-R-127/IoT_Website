
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import "./ContactForm.css";

const WHATSAPP_NUMBER = "918925450473";

const initialForm = {
  parentName: "",
  childName: "",
  childAge: "",
  phone: "",
  email: "",
  course: "",
  message: "",
};

const contactDetails = [
  {
    label: "Phone",
    value: "+91 89254 50473",
    icon: Phone,
    tone: "phone",
  },
  {
    label: "Email",
    value: "teamprojenius@gmail.com",
    icon: Mail,
    tone: "email",
  },
  {
    label: "Location",
    value: "Madurai, Tamil Nadu 625003",
    icon: MapPin,
    tone: "location",
  },
  {
    label: "Working Hours",
    value: "Mon - Sat, 10:00 AM - 7:00 PM",
    icon: Clock,
    tone: "hours",
  },
];

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      "Hello ProJenius! I would like to enquire about your courses.",
      "",
      `Parent Name: ${form.parentName}`,
      `Child Name: ${form.childName}`,
      `Child Age: ${form.childAge}`,
      `Phone Number: ${form.phone}`,
      `Email: ${form.email}`,
      `Interested Course: ${form.course}`,
      `Message: ${form.message || "No additional message"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contact-form-section" aria-labelledby="contact-form-title">
      <div className="contact-form-panel">
        <div
          className="contact-form-decoration contact-form-decoration-one"
          aria-hidden="true"
        />
        <div
          className="contact-form-decoration contact-form-decoration-two"
          aria-hidden="true"
        />

        {/* Left contact information */}
        <div className="contact-form-info">
          <div className="contact-form-eyebrow">
            <span>GET IN TOUCH</span>
            <span />
          </div>

          <h2 id="contact-form-title">
            Let’s find the
            <span>right learning</span>
            <span>path.</span>
          </h2>

          <p className="contact-form-intro">
            Share a few details about your child and the course you are
            interested in. We’ll get back to you as soon as possible.
          </p>

          <div className="contact-form-details">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <div className="contact-detail" key={item.label}>
                  <span className={`contact-detail-icon ${item.tone}`}>
                    <Icon size={21} strokeWidth={2.4} />
                  </span>

                  <div className="contact-detail-copy">
                    <strong>{item.label}</strong>
                    <span>{item.value}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            className="contact-whatsapp-button"
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={21} />
            <span>Chat on WhatsApp</span>
            <ArrowRight size={20} />
          </a>
        </div>

        {/* Decorative illustration */}
        <div className="contact-form-illustration" aria-hidden="true">
          <img
            src="/images/contact-form.png"
            alt=""
            loading="lazy"
          />
        </div>

        {/* Enquiry form */}
        <div className="contact-form-card">
          <form onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              <div className="contact-field">
                <label htmlFor="parentName">Parent Name</label>
                <input
                  id="parentName"
                  name="parentName"
                  value={form.parentName}
                  onChange={handleChange}
                  placeholder="Enter parent name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="childName">Child Name</label>
                <input
                  id="childName"
                  name="childName"
                  value={form.childName}
                  onChange={handleChange}
                  placeholder="Enter child name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="childAge">Child Age</label>
                <input
                  id="childAge"
                  name="childAge"
                  type="number"
                  min="1"
                  max="18"
                  value={form.childAge}
                  onChange={handleChange}
                  placeholder="e.g. 10"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  autoComplete="tel"
                  pattern="[+]?[0-9 ()-]{8,18}"
                  title="Enter a valid phone number"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="course">Interested Course</label>
                <select
                  id="course"
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a course
                  </option>
                  <option value="IoT">IoT</option>
                  <option value="Robotics">Robotics</option>
                  <option value="Arduino">Arduino</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Coding">Coding</option>
                  <option value="Artificial Intelligence">
                    Artificial Intelligence
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="contact-field contact-field-full">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what you would like to know"
                  rows={4}
                />
              </div>
            </div>

            <button className="contact-submit-button" type="submit">
              <span>Send Enquiry</span>
              <ArrowRight size={21} strokeWidth={2.4} />
            </button>

            <p className="contact-form-note">
              Send Enquiry prepares the entered details as a WhatsApp message.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
