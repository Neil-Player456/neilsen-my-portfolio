import React, { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [stars, setStars] = useState([]);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [showCaptcha, setShowCaptcha] = useState(false);

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const recaptchaRef = useRef(null);

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

  const handleSendClick = (e) => {
    e.preventDefault();
    setShowCaptcha(true); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the reCAPTCHA before submitting.");
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken: captchaToken }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert(data.message || "Thanks! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
        recaptchaRef.current.reset();
        setCaptchaToken(null);
        setShowCaptcha(false);
      } else {
        alert(data.error || "Failed to send message. Please try again.");
        recaptchaRef.current.reset();
        setCaptchaToken(null);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "Failed to connect to server. Please make sure the backend is running."
      );
      recaptchaRef.current.reset();
      setCaptchaToken(null);
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

        <div className="button-captcha-wrapper">
          <div
            className={`send-button-wrapper ${
              showCaptcha ? "fade-slide-out" : "fade-slide-in"
            }`}
          >
            {!showCaptcha && (
              <button type="button" onClick={handleSendClick}>
                Send
              </button>
            )}
          </div>

          <div
            className={`captcha-submit-wrapper ${
              showCaptcha ? "fade-slide-in" : "fade-slide-out"
            }`}
          >
            {showCaptcha && (
              <>
                <ReCAPTCHA
                  sitekey={siteKey}
                  onChange={(token) => setCaptchaToken(token)}
                  ref={recaptchaRef}
                />
                <button type="submit">Submit</button>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;