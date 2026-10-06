import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { siteConfig, whatsappUrl } from "../../config/site.js";
import "./Footer.css";
import { Phone, Mail, MapPin} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-about">
          <div className="footer-brand">
            <span className="footer-mark">TS</span>
            {siteConfig.companyName}
          </div>
          <p>
            Hands-on technology learning for kids through IoT, electronics,
            coding, robotics and AI.
          </p>
          <a
            className="footer-whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} /> Chat on WhatsApp
          </a>
        </div>

        <div>
          <h4>Quick Links</h4>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/faqs">FAQs</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4>Courses</h4>
          <div className="footer-links">
            <Link to="/courses">IoT</Link>
            <Link to="/courses">Arduino</Link>
            <Link to="/courses">Robotics</Link>
            <Link to="/courses">Electronics</Link>
            <Link to="/courses">Coding</Link>
            <Link to="/courses">AI</Link>
          </div>
        </div>

        <div>
          <h4>Contact</h4>
          <div className="footer-links-contact">
            <span>
              <Phone size={16} />
              {siteConfig.phone}
            </span>

            <span>
              <Mail size={16} />
              {siteConfig.email}
            </span>

            <span>
              <MapPin size={16} />
              {siteConfig.location}
            </span>

            {/* <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={16} />
              WhatsApp
            </a> */}
          </div>
          <h4 className="social-title">Social Media</h4>
          <div className="socials">
            <a href="#" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube size={18} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 {siteConfig.companyName}. All Rights Reserved.</span>
        <span>
          <Link to="/privacy">Privacy Policy</Link> |{" "}
          <Link to="/terms">Terms & Conditions</Link>
        </span>
      </div>
    </footer>
  );
}
