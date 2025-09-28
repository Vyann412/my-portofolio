import { useState, useEffect } from "react";
import "./App.css";
import Loading from "./components/Loading";
import Home from "./page/home";
import Welcome from "./components/Welcome";
import RisingParticle from "./components/RisingParticles";

function App() {
  const [steps, setSteps] = useState("loading");
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSteps("welcome");
      setShowParticles(true);
    }, 2000);

    const timer1 = setTimeout(() => {
      setSteps("content");
    }, 7000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div id="initial">
      {showParticles && <RisingParticle />}

      <div id="initial-content">
        {steps === "loading" && <Loading />}
        {steps === "welcome" && <Welcome />}
        {steps === "content" && <Home />}
      </div>
    </div>
  );
}

export default App;
