import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [stars, setStars] = useState([]);
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  // Load the reCAPTCHA script
  useEffect(() => {
    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
    if (!siteKey) {
      console.error("VITE_RECAPTCHA_SITE_KEY is missing!");
      return;
    }

    // Only load once
    if (!document.getElementById("recaptcha-script")) {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.id = "recaptcha-script";
      script.async = true;
      document.body.appendChild(script);
    }

    // Poll until grecaptcha is ready
    const checkGrecaptcha = setInterval(() => {
      if (window.grecaptcha && window.grecaptcha.execute) {
        window.grecaptcha.ready(() => {
          setRecaptchaReady(true);
        });
        clearInterval(checkGrecaptcha);
      }
    }, 50);

    return () => clearInterval(checkGrecaptcha);
  }, []);

  useEffect(() => {
    const newStars = Array.from({ length: 50 }).map(() => ({
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      size: Math.random() * 3 + 1,
      delay: Math.random() * 20,
    }));
    setStars(newStars);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaReady) {
      alert("reCAPTCHA is still loading. Please wait a moment.");
      return;
    }

    try {
      // Safely execute reCAPTCHA
      const token = await window.grecaptcha.execute(
        import.meta.env.VITE_RECAPTCHA_SITE_KEY,
        { action: "contact_form" }
      );

      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken: token }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert(data.message || "Thanks! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "Failed to connect to server or reCAPTCHA not loaded. Please make sure the backend is running."
      );
    }
  };

  return (
    <div className="contact-section" id="contact">
      <span className="contact-eyebrow">
        <span className="contact-eyebrow-symbol">✦</span> Contact Me
      </span>

      <div className="stars">
        {stars.map((star, index) => (
          <div
            key={index}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: `${star.delay}s`,
            }}
          ></div>
        ))}
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;