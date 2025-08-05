import React, { useState, useEffect } from "react";
import "./navbar.css";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Services_Data from "../../assets/services_data"; 

const sectionMap = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "services" },
  { label: "Technologies", id: "tech" },
  { label: "Projects", id: "mywork" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (id, isSkills = false) => {
    if (window.innerWidth <= 1023 && isSkills) {
      setShowDropdown(!showDropdown);
      return;
    }
    closeMenu();
    setShowDropdown(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

  const getSkillPath = (skillName) => {
    const paths = {
      "Web development": "web-development",
      "UI/UX design": "ui-ux-design",
      "App development": "app-development",
      "API handling": "api-handling",
      "Data Analytics & Visualization": "data-visualization",
      "Quality Skills": "quality-skills"
    };
    return `/skills/${paths[skillName]}`;
  };

  const handleSkillClick = (skillName) => {
    navigate(getSkillPath(skillName));
    setShowDropdown(false);
    closeMenu();
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (let sec of sectionMap) {
        const section = document.getElementById(sec.id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar">
      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        {sectionMap.map((sec, index) =>
          sec.label === "Skills" ? (
            <li
              key={index}
              onMouseEnter={() => window.innerWidth > 1023 && setShowDropdown(true)}
              onMouseLeave={() => window.innerWidth > 1023 && setShowDropdown(false)}
            >
              <button
                onClick={() => handleNavClick(sec.id, true)}
                className={activeSection === sec.id ? "active" : ""}
              >
                {sec.label} <FaAngleDown style={{ marginLeft: "5px" }} />
              </button>

              {/* Dropdown */}
              {showDropdown && (
                <div className={`skills-dropdown ${menuOpen ? 'mobile-dropdown' : ''}`}>
                  {Services_Data.map((item, i) => (
                    <div 
                      key={i} 
                      className="skills-dropdown-item"
                      onClick={() => handleSkillClick(item.s_name)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img src={item.s_img} alt={item.s_name} />
                      <div className="skills-dropdown-title">{item.s_name}</div>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ) : (
            <li key={index}>
              <button
                onClick={() => handleNavClick(sec.id)}
                className={activeSection === sec.id ? "active" : ""}
              >
                {sec.label}
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Navbar;
