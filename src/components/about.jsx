import React from 'react';

function About() {
  return (
    <main>
      <div className="main-content">
        <div className="left-section">
          <div className="image-container">
            <img src="/images/head-photo.png" alt="Sabine Torres Lao" />
          </div>
          <div className="links-container">
            <a href="tel:+61450353004">
              <img src="/images/phone-icon.png" alt="Phone Icon" />
            </a>
            <a href="mailto:sabine0818@gmail.com">
              <img src="/images/email-icon.png" alt="Email Icon" />
            </a>
            <a href="https://www.linkedin.com/in/sabine-lao">
              <img src="/images/linkedin-logo.png" alt="LinkedIn Icon" />
            </a>
            <a href="https://github.com/Sabine-Torres-Lao">
              <img src="images/github-mark.png" alt="LinkedIn Icon" />
            </a>
          </div>
        </div>
        <div className="right-section">
          <div className="main-text">
            <h1 className="main-text-name">I'm Sabine.</h1>
            <h1 className="main-text-description">Student | Web Developer | Leader</h1>
            <ul>
              <li>Dynamic Computer Science student at UNSW, boasting a Distinction WAM</li>
              <li>Recognized for exceptional leadership qualities, serving as student representative on the Academic Program Review</li>
              <li>Received Highest Honours as the top of her high school batch of over 400 students, securing a full-ride scholarship in Year 12</li>
              <li>Exhibited proficiency in website development at QuickSite Guru, mentoring at Tinkertank and research at Study.com</li>
              <li>Engaged in diverse extracurricular activities including active subcommittee involvement and the completion of programming, language, and art courses</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
