import React, { useState, useEffect } from "react";
import './Navbar.css';
import { CloudLightning, Contact, GalleryThumbnails, House, User } from "lucide-react";

const links = [
  {
    icon: <House />,
    text: 'Home',
    link: '#header'
  },
  {
    icon: <User />,
    text: 'About',
    link: '#about',
  },
  {
    icon: <GalleryThumbnails />,
    text: 'Gallery',
    link: '#gallery',
  }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = '#header';
      for (const item of links) {
        const section = document.querySelector(item.link);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = item.link;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${scrolled ? 'scrolled' : ''}`}>
      <h2>
        <CloudLightning />
        <span>Storm</span>
      </h2>
      <div className="links">
        {links.map((item, index) => (
          <a
            key={index}
            className={activeSection === item.link ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname === '/') {
                document.querySelector(item.link)?.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.href = '/';
              }
            }}
          >
            {item.icon}
            <span>{item.text}</span>
          </a>
        ))}
      </div>
      <a
        href="/contact"
        className={`${window.location.pathname === '/contact' ? 'active' : ''}`}
      >
        <Contact />
        <span>Contact</span>
      </a>
    </nav>
  );
}
