import { useState } from "react";
import "./certificates.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Certification({ items }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="slider">
      <div className="slide" onClick={nextSlide}>
        <button className="arrow arrow-left" onClick={prevSlide}>
          <FiChevronLeft size={40} />
        </button>

        <div className="image-wrapper">
          <img src={items[current].img} alt={`Certificate ${current + 1}`} />
          <div className="description">
            <p>{items[current].description}</p>
          </div>
        </div>

        <button className="arrow arrow-right" onClick={nextSlide}>
          <FiChevronRight size={40} />
        </button>

        <div
          className="slide-left"
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
        ></div>
        <div
          className="slide-right"
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
        ></div>
      </div>

      <div className="dots">
        {items.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === current ? "active" : ""}`}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Certification;
