import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Sabine Torres Lao</h1>
      <button className="dropdown-button">Menu</button>
      <nav>
        <Link to="/about">ABOUT ME</Link>
        <Link to="/resume">RESUME</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/extracurriculars">EXTRACURRICULARS</Link>
      </nav>
      <div className="vertical-navbar">
        <Link to="/about">ABOUT ME</Link>
        <Link to="/resume">RESUME</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/extracurriculars">EXTRACURRICULARS</Link>
      </div>
    </header>
  );
}

export default Header;
