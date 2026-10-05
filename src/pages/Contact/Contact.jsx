import { useState } from "react";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  buildWhatsAppMessage,
  siteConfig,
  whatsappUrl,
} from "../../config/site.js";
import PageHero from "../../components/PageHero/PageHero.jsx";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    window.open(buildWhatsAppMessage(form), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Have questions about our courses?"
        text="Talk to our team. For the fastest response, use WhatsApp."
      />
      <main className="contact-page">
        <div className="contact-info">
          <span className="eyebrow">Get in touch</span>
          <h2>Let's find the right learning path.</h2>
          <p>
            Share a few details about your child and the course you are
            interested in.
          </p>
          <div className="contact-list">
            <div>
              <Phone />
              <span>
                <b>Phone</b>
                {siteConfig.phone}
              </span>
            </div>
            <div>
              <Mail />
              <span>
                <b>Email</b>
                {siteConfig.email}
              </span>
            </div>
            <div>
              <MapPin />
              <span>
                <b>Location</b>
                {siteConfig.location}
              </span>
            </div>
            <div>
              <Clock3 />
              <span>
                <b>Working Hours</b>
                {siteConfig.workingHours}
              </span>
            </div>
          </div>
          <a
            className="contact-whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <div className="form-row">
            <label>
              Parent Name
              <input
                required
                name="parentName"
                value={form.parentName}
                onChange={update}
                placeholder="Enter parent name"
              />
            </label>
            <label>
              Child Name
              <input
                required
                name="childName"
                value={form.childName}
                onChange={update}
                placeholder="Enter child name"
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Child Age
              <input
                name="childAge"
                value={form.childAge}
                onChange={update}
                placeholder="e.g. 10"
              />
            </label>
            <label>
              Phone Number
              <input
                required
                name="phone"
                value={form.phone}
                onChange={update}
                placeholder="Enter phone number"
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                placeholder="Enter email"
              />
            </label>
            <label>
              Interested Course
              <select name="course" value={form.course} onChange={update}>
                <option value="">Select a course</option>
                <option>IoT for Kids</option>
                <option>Arduino for Kids</option>
                <option>Robotics</option>
                <option>Electronics & Sensors</option>
                <option>Coding for Kids</option>
                <option>AI for Kids</option>
                <option>IoT + Robotics</option>
              </select>
            </label>
          </div>
          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={update}
              rows="5"
              placeholder="Tell us what you would like to know"
            ></textarea>
          </label>
          <div className="form-actions">
            <button type="submit">Send Enquiry</button>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>
          <small>
            Send Enquiry prepares the entered details as a WhatsApp message.
          </small>
        </form>
      </main>
    </>
  );
}
