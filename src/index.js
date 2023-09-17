import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import HomeSection from "./HomeSection"; // Import the HomeSection component
import AboutSection from "./AboutSection"; // Import the AboutSection component

function NavBar({ setActivePage }) {
  return (
    <nav className="navbar">
      <h1>Dashboard</h1>
      <ul>
        <li><a href="#" onClick={() => setActivePage("home")}>Home</a></li>
        <li><a href="#" onClick={() => setActivePage("about")}>About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div>
      <NavBar setActivePage={setActivePage} />
      {activePage === "home" ? <HomeSection /> : <AboutSection />}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
