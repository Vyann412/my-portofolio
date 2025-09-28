import { useState, useEffect } from "react";
import "./Menu.css";
import { FiUser, FiSettings, FiFileText } from "react-icons/fi";

function Menu({ callback }) {
  const [barState, setBarState] = useState("AboutMe");

  useEffect(() => {
    if (callback) {
      callback(() => setBarState);
    }
  }, [callback]);

  return (
    <div id="menu-container">
      <div id="hover-me">
        <i>H</i>
        <i>O</i>
        <i>V</i>
        <i>E</i>
        <i>R</i>
        <div></div>
        <i>L</i>
        <i>E</i>
        <i>F</i>
        <i>T</i>
        <i>!</i>
      </div>

      {/* buat component baru utk menu */}

      <div id="menu-option">
        <div
          className={barState === "AboutMe" ? "menu-item active" : "menu-item"}
        >
          <FiUser size={32} />
        </div>
        <div
          className={barState === "Skills" ? "menu-item active" : "menu-item"}
        >
          <FiSettings size={32} />
        </div>
        <div
          className={barState === "Projects" ? "menu-item active" : "menu-item"}
        >
          <FiFileText size={32} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
