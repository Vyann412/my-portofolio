import "./AboutMe.css";
import { FaRegHandPaper } from "react-icons/fa";
import { useEffect, useState } from "react";

function AboutMe({ name, roles }) {
  const userName = name;
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    let typingSpeed = isDeleting ? 10 : 100;

    const typeTimeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(typeTimeout);
  }, [charIndex, isDeleting, index, roles]);

  return (
    <div id="about-me-parent">
      <div id="introduction">
        <h1>
          Hi, I am <span>{userName}!</span>
          <FaRegHandPaper className="wave-icon" />
        </h1>
      </div>
      <div id="current-role">
        <p>
          I am <span className="typing">{text}</span>!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
