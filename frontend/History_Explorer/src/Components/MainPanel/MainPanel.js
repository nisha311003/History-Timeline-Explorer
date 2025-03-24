import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MainPanel.css";
import Gupta_Image from "../Assests/Gupta_Empire_Image2.jpg";
import Mauryan_Image from "../Assests/Mauryan_Dynasty_Image1.jpg";
import Indus_Image from "../Assests/Indus_Valley_Civilisation_Image1.webp";
import Indian_Image from "../Assests/Indian_Independance_Image1.webp";

const historyPeriods = [
  { name: "Indus Valley Civilisation", color: "#FFD700" },
  { name: "Vedic Period", color: "#FFA500" },
  { name: "Gupta Empire", color: "#FF4500" },
  { name: "Mauryan Dynasty", color: "#DC143C" },
  { name: "Medieval Period", color: "#8A2BE2" },
  { name: "Chola Dynasty", color: "#1E90FF" },
  { name: "Mughal Empire", color: "#32CD32", link: "/secondpage" },
  { name: "Colonial Era", color: "#FF1493" },
  { name: "Indian Independence", color: "#00CED1" },
  { name: "Post Independent India", color: "#FF6347" },
  { name: "Harappan Civilisation", color: "#8A2BE2" }
];

// Array of background images
const backgroundImages = [
  Gupta_Image,
  Mauryan_Image,
  Indus_Image,
  Indian_Image,
];

function MainPanel() {
  const [isActive, setIsActive] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="body">
      <div 
        className="history-bg"
        style={{ backgroundImage: `url(${backgroundImages[bgIndex]})` }}
      >
        {/* Period Button (Center) */}
        <div className={`menuToggle ${isActive ? "active" : ""}`} onClick={toggleMenu}>
          Period
        </div>

        {/* Circular Menu */}
        <ul className={`menu ${isActive ? "active" : ""}`} style={{ "--count": historyPeriods.length }}>
          {historyPeriods.map((period, index) => (
            <li key={index} style={{ "--i": index, "--clr": period.color }}>
              {period.link ? (
                <Link to={period.link}>{period.name}</Link> // React Router Link
              ) : (
                <a href="#">{period.name}</a> // Regular anchor for others
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MainPanel;
