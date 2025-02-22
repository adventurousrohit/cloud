"use client";

import React, { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const ContactButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show buttons when the user scrolls down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Listen for scroll events to toggle visibility
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`contact-buttons ${isVisible ? "active" : ""}`}
      style={{
        position: "fixed",
        left: "20px",
        bottom: "40px",
        zIndex: "1000",
      }}
    >
      {isVisible && (
        <>
          <a href="tel:+918447755312" className="contact-button call-button">
            <FaPhone style={{ fontSize: "2rem" }} />
          </a>
          <a
            href="https://wa.me/+918233040013"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button call-button mt-4"
          >
            <FaWhatsapp style={{ fontSize: "2rem" }} />
          </a>
        </>
      )}
    </div>
  );
};

export default ContactButtons;
