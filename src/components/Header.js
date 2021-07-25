import React from "react";
import logo from "../assets/logos.png";
import "./Header.css";
import {Link} from 'react-scroll';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="profile_logo" />
      </div>
      <nav className="header-nav">
        <ul className="header-nav__items">
          <li className="header-nav__item">
            <Link smooth={true} to="about" offset={-110} href="/about"> About Me </Link>
          </li>
          <li className="header-nav__item">
            <Link smooth={true} to="projects" offset={-110} href="/projects"> Projects </Link>
          </li>
          <li className="header-nav__item">
            <Link smooth={true} to="contact" offset={-110} href="/contact"> Contact </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
