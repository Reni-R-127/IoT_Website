import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import { siteConfig, whatsappUrl } from "../../config/site.js";
import logo from "../../assets/logo.png";

import "./Footer.css";

const socialLinks = {
  instagram: "https://www.instagram.com/YOUR_INSTAGRAM",
  facebook: "https://www.facebook.com/YOUR_FACEBOOK",
  youtube: "https://www.youtube.com/@YOUR_YOUTUBE",
  linkedin: "https://www.linkedin.com/company/YOUR_LINKEDIN",
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* ABOUT */}
        <div className="footer-about">
          <Link to="/" className="footer-brand">
            <img
              src={logo}
              alt={`${siteConfig.companyName} Logo`}
              className="footer-logo"
            />

            <span>{siteConfig.companyName}</span>
          </Link>

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
            <MessageCircle size={18} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
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

        {/* COURSES */}
        <div className="footer-column">
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

        {/* CONTACT */}
        <div className="footer-column footer-contact">
          <h4>Contact</h4>

          <div className="footer-links-contact">

            <span>
              <Phone size={17} />
              {siteConfig.phone}
            </span>

            <span>
              <Mail size={17} />
              {siteConfig.email}
            </span>

            <span>
              <MapPin size={17} />
              {siteConfig.location}
            </span>

          </div>

          <h4 className="social-title">
            Social Media
          </h4>

          <div className="socials">

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={19} />
            </a>

            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={19} />
            </a>

            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <Youtube size={19} />
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={19} />
            </a>

          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <span>
          © 2026 {siteConfig.companyName}. All Rights Reserved.
        </span>

        <span>
          <Link to="/privacy">
            Privacy Policy
          </Link>

          <b>|</b>

          <Link to="/terms">
            Terms & Conditions
          </Link>
        </span>
      </div>
    </footer>
  );
}