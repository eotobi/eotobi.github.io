import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import styled from "styled-components";

const ThemeToggleButton = styled.button`
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.cardBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.theme.name === "light" ? "#f0f1f6" : "#1a1a2e"};
  outline: none;
  transition: all 0.3s ease;
  &:hover {
    transform: rotate(30deg) scale(1.1);
    border-color: ${(props) => props.theme.accentColor};
    box-shadow: 0 0 20px ${(props) => props.theme.cardShadow};
  }
`;

function Header(props) {
  const theme = props.theme;
  const link = settings.isSplash ? "/splash" : "home";

  function changeTheme() {
    if (theme.name === "light") {
      props.setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      props.setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }

  const icon =
    theme.name === "dark" ? (
      <HiMoon strokeWidth={1} size={18} color={theme.accentColor} />
    ) : (
      <CgSun strokeWidth={1} size={18} color={theme.accentColor} />
    );

  return (
    <header className="header" style={{ backgroundColor: theme.headerBg }}>
      <NavLink to={link} className="logo">
        <span className="logo-name" style={{ color: theme.text }}>
          {greeting.logo_name}
        </span>
      </NavLink>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn" style={{ color: theme.accentColor }}>
        <span className="navicon" style={{ background: theme.accentColor }}></span>
      </label>
      <nav className="menu">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                `nav-link${isActive ? " nav-active" : ""}`
              }
              to="/home"
              style={{ color: theme.text }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `nav-link${isActive ? " nav-active" : ""}`
              }
              to="/education"
              style={{ color: theme.text }}
            >
              Education
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `nav-link${isActive ? " nav-active" : ""}`
              }
              to="/experience"
              style={{ color: theme.text }}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `nav-link${isActive ? " nav-active" : ""}`
              }
              to="/projects"
              style={{ color: theme.text }}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `nav-link${isActive ? " nav-active" : ""}`
              }
              to="/contact"
              style={{ color: theme.text }}
            >
              Contact
            </NavLink>
          </li>
          <li className="theme-toggle-li">
            <ThemeToggleButton onClick={changeTheme}>
              {icon}
            </ThemeToggleButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
