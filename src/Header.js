import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`Header ${isScrolled ? "scrolled" : ""}`}>
      <a href="#">Portfolio.</a>
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={menuOpen ? "menu-open" : ""}>
        <li>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
