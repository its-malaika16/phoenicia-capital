import { useState, useEffect } from "react";
import "./Hero.css";

const images = [
  "/assets/images/skyline.jpg",
  "/assets/images/global-finance.jpg",
  "/assets/images/digital-banking.jpg",
];

const textSlides = [
  {
    small: "Phoenicia Capital Holdings",
    headingWhite: "Building Stronger Futures Across",
    headingGold: " Industries",
    paragraph:
      "Phoenicia Capital Holdings is a diversified global group driving innovation in finance, education, energy, and business services through trusted brands and forward-thinking solutions.",
  },
  {
    small: "What We Do",
    headingWhite: "One Vision. Multiple Industries. Endless",
    headingGold: " Possibilities",
    paragraph:
      "Phoenicia Capital Holdings brings together innovative businesses across finance, education, energy, and technology to shape a smarter and more connected future.",
  },
  {
    small: "Our Mission",
    headingWhite: "Empowering Growth Through Vision &",
    headingGold: " Innovation",
    paragraph:
      "From digital banking and payroll solutions to education recruitment and energy services, we build companies designed to create long-term impact and sustainable success.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">

      {/* Slider */}
      <div
        className="hero-slider"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="hero-slide"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <span className="hero-small">{textSlides[index].small}</span>

        <h1 className="hero-heading">
          {textSlides[index].headingWhite}
          <span className="gold">{textSlides[index].headingGold}</span>
        </h1>

        <p className="hero-paragraph">{textSlides[index].paragraph}</p>

        {/* ✅ FIXED: buttons centered */}
        <div className="hero-buttons">
          <button className="primary-btn">Get Started </button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>

      {/* Dots */}
      <div className="hero-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}