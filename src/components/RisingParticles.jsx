import { useState, useEffect } from "react";
import "./RisingParticle.css";

function RisingParticle() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 25 }).map(() => ({
      left: Math.random() * 100,
      delay: 1 + Math.random() * 3,
      size: 2 + Math.random() * 6,
      duration: 3 + Math.random() * 3,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="particles">
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            "--left": `${p.left}%`,
            "--delay": `${p.delay}s`,
            "--size": `${p.size}px`,
            "--duration": `${p.duration}s`,
          }}
        ></span>
      ))}
    </div>
  );
}

export default RisingParticle;
