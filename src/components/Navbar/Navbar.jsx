import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { siteConfig, whatsappUrl } from "../../config/site.js";
import "./Navbar.css";

const links = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/courses", "Courses"],
  ["/pricing", "Pricing"],
  ["/faqs", "FAQs"],
  ["/blog", "Blog"],
  ["/contact", "Contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <span className="brand-mark">TS</span>
          <span>
            <strong>{siteConfig.companyName}</strong>
            <small>Learn • Build • Create</small>
          </span>
        </Link>

        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-links ${open ? "nav-open" : ""}`}>
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <a className="nav-enroll" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            <MessageCircle size={17} /> Enroll Now
          </a>
        </nav>
      </div>
    </header>
  );
}
