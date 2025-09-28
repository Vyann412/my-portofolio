import { useState, useEffect, useRef } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../../public/vite.svg";
import Menu from "../components/Menu.jsx";
import "../page/home.css";
import RisingParticle from "../components/RisingParticles.jsx";
import AboutMe from "../components/AboutMe.jsx";
import Certification from "../components/Certification.jsx";

function Home() {
  const myRoles = [
    "a Binusian 2027",
    "a Computer Science Major",
    "Learning Software Engineering",
    "Learning Mobile Programming",
  ];

  const myCertificates = [
    {
      img: new URL("../assets/samsungLogic.jpg", import.meta.url).href,
      description: "Passsing the Logic Test For Samsung Innovation Campus",
    },
    {
      img: new URL("../assets/samsung1.jpg", import.meta.url).href,
      description: "Participant for Stage 1 at Samsung Innovation Campus",
    },
    {
      img: new URL("../assets/agile1.jpg", import.meta.url).href,
      description:
        "Passing Agile Methods for Software Development Online Course",
    },
    {
      img: new URL("../assets/agile3.jpg", import.meta.url).href,
      description:
        "Passing Project Management With Agile Scrum Method Online Course",
    },
    {
      img: new URL("../assets/agile2.jpg", import.meta.url).href,
      description: "Passing Project Management With Agile Method Online Course",
    },
  ];

  const [count, setCount] = useState(0);
  const [menuSetter, setMenuSetter] = useState(null);

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    if (!menuSetter) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            menuSetter(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(aboutRef.current);
    observer.observe(skillsRef.current);
    observer.observe(projectsRef.current);

    return () => observer.disconnect();
  }, [menuSetter]);

  return (
    <>
      <RisingParticle></RisingParticle>

      <div id="content">
        <Menu callback={setMenuSetter}></Menu>
        <section id="AboutMe" ref={aboutRef}>
          <div id="about-me-container">
            <h1 id="title">
              <span>my</span>
              <span>Porto</span>
              <span>.</span>
            </h1>
            <div id="about-me-frame">
              <div id="about-me-content">
                <AboutMe name="Davian Geraldy" roles={myRoles} />
              </div>
            </div>
          </div>
        </section>
        <section id="Skills" ref={skillsRef}>
          <div id="skill-container">
            <div id="skill-menu-title">
              <h1> Technical Side</h1>
            </div>
            <h1 id="app-tools">
              This <span>Web</span> Was Made <span>Using</span>
            </h1>
            <div id="vite-and-react">
              <div id="vite">
                <h1>Vite</h1>
                <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <p>
                  lightweight and fast development tool that quickly builds and
                  serves modern web applications
                </p>
              </div>
              <h1>+</h1>
              <div id="react">
                <h1>React</h1>
                <a href="https://react.dev" target="_blank">
                  <img
                    src={reactLogo}
                    className="logo react"
                    alt="React logo"
                  />
                </a>
                <p>
                  JavaScript library used to create dynamic and interactive user
                  interfaces with reusable components
                </p>
              </div>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
            <div id="experience">
              <div id="experience-container">
                <h1>
                  Experience <span>&</span> Organization<span>!</span>
                </h1>
                <div id="experiences">
                  <div className="experience-card">
                    <h2>
                      Bina Nusantara <span>University</span>
                    </h2>
                    <ul>
                      <li>Programming Skills</li>
                      <li>Object Oriented Programming</li>
                      <li>Agile Software Development</li>
                      <li>Algorithm Logics</li>
                    </ul>
                  </div>

                  <div className="experience-card">
                    <h2>
                      Binus English Club <span>IT Division</span>
                    </h2>
                    <ul>
                      <li>English Speaking Skill</li>
                      <li>Team Development</li>
                      <li>Team Working</li>
                      <li>Public Speaking Skill</li>
                    </ul>
                  </div>

                  <div className="experience-card">
                    <h2>
                      GBI Youth <span>Committee</span>
                    </h2>
                    <ul>
                      <li>Time Management</li>
                      <li>Communication</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="Projects" ref={projectsRef}>
          <div id="my-project-container">
            <div id="certificate-container">
              <h1>
                My Certificate<span>!</span>
              </h1>
              <div className="slider-container">
                <Certification items={myCertificates} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
