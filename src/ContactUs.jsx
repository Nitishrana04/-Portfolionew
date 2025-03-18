import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for any inquiries or collaborations!</p>

      <form action="https://formspree.io/f/xnnpnwzo" method="POST" className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactUs;
