import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact" role="region" aria-label="Contact Information">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:alingasadel2021@gmail.com">alingasadel2021@gmail.com</a></p>

      <div className="social-icons" aria-label="Social Media Links">
        <a
          href="https://www.facebook.com/share/1CK9wkJsfC/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.tiktok.com/@imjustanuglyguy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <FaTiktok />
        </a>
        <a
          href="https://www.instagram.com/rod_el0204?igsh=MXI5ajVlY3hqOXJ2aw=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}
