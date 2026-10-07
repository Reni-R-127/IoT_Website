import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";

import { siteConfig, whatsappUrl } from "../../config/site.js";
import logo from "../../assets/logo.png";

import "./Navbar.css";

const links = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/courses", "Courses"],
  ["/pricing", "Pricing"],
  ["/faqs", "FAQs"],
  ["/blog", "Blog"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const { pathname } = useLocation();

  /* =========================================
     PAGE SCROLL TO TOP WHEN ROUTE CHANGES
  ========================================= */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    setOpen(false);
  }, [pathname]);


  /* =========================================
     NAVBAR SHOW / HIDE ON SCROLL
  ========================================= */

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let hideTimer = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      /* Always show navbar near the top */
      if (currentScrollY <= 40) {
        setVisible(true);

        if (hideTimer) {
          clearTimeout(hideTimer);
          hideTimer = null;
        }

        lastScrollY = currentScrollY;
        return;
      }

      /* Scrolling DOWN */
      if (currentScrollY > lastScrollY) {
        setVisible(false);

        if (hideTimer) {
          clearTimeout(hideTimer);
          hideTimer = null;
        }
      }

      /* Scrolling UP */
      else if (currentScrollY < lastScrollY) {
        setVisible(true);

        if (hideTimer) {
          clearTimeout(hideTimer);
        }

        /*
          Keep navbar visible for 2.5 seconds
          after upward scrolling stops.
        */
        hideTimer = setTimeout(() => {
          setVisible(false);
        }, 2500);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (hideTimer) {
        clearTimeout(hideTimer);
      }
    };
  }, []);


  /* =========================================
     LOGO / COMPANY NAME FULL PAGE REFRESH
  ========================================= */

  const handleBrandClick = (event) => {
    event.preventDefault();

    setOpen(false);

    /*
      Force a complete browser refresh.
      This also refreshes when already on Home.
    */
    window.location.href = "/";
  };


  return (
    <header className={`navbar ${visible ? "navbar-visible" : "navbar-hidden"}`}>

      <div className="navbar-inner">

        {/* =====================================
            BRAND
        ===================================== */}

        <Link
          className="brand"
          to="/"
          onClick={handleBrandClick}
        >
          <img
            src={logo}
            alt={`${siteConfig.companyName} Logo`}
            className="brand-logo"
          />

          <span>
            <strong>{siteConfig.companyName}</strong>

            <small>
              Learn · Build · Create
            </small>
          </span>
        </Link>


        {/* =====================================
            MOBILE MENU
        ===================================== */}

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>


        {/* =====================================
            NAVIGATION
        ===================================== */}

        <nav
          className={`nav-links ${
            open ? "nav-open" : ""
          }`}
        >

          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}


          {/* =================================
              ENROLL NOW
          ================================= */}

          <a
            className="nav-enroll"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            <MessageCircle size={16} />

            <span>
              Enroll Now
            </span>
          </a>

        </nav>

      </div>

    </header>
  );
}