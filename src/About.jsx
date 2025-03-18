import React from "react";
import "./About.css";
import profileImage from "./assets/nitish-rana.png"; // Ensure this path is correct

function About() {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm <strong>Nitish Rana</strong>, a passionate web developer and entrepreneur.  
            I specialize in <strong>React.js, JavaScript, HTML, CSS, and Firebase</strong> to build modern, user-friendly web applications.
          </p>
          <p>
            As the founder of <strong>RanaWeb Solutions</strong>, my goal is to help students with high-quality web projects and practical learning experiences.  
          </p>
          <p>
            <strong>🎓 Education & Learning:</strong><br />
            ✅ <strong>Bachelor of Computer Applications (BCA)</strong> - Completed (2021 - 2024) <br />
            ✅ <strong>Master of Computer Applications (MCA)</strong> - Pursuing (2024 - 2026)  <br/>
            ✅ Constantly exploring new frameworks, libraries, and industry trends to stay ahead in web development.
          </p>
          <button className="contact-btn" onClick={scrollToContact}>
            CONTACT ME
          </button>
        </div>
        <div className="about-image">
          <img src={profileImage} alt="Nitish Rana" />
        </div>
      </div>
    </section>
  );
}

export default About;
