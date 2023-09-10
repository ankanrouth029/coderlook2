import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

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

function HomeSection() {
  return (
    <div className="welcome-container">
      <div className="about">
      <h1>Welcome to Coderlook</h1>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <>
      
      <div className="table-container">
        <div className="about">
          <h1>About Us</h1>
        </div>
          <div class="emp">
            <div class="org-detail">
              <p>
                <strong>Organisation: </strong>Coderlook
              </p>
              <p>
                <strong>Address: </strong>Kolkata
              </p>
              <p>
                <strong>Phone: </strong>
              </p>
            </div>
          </div>
          <table>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>John</td>
              <td>25</td>
              <td>USA</td>
            </tr>
            <tr>
              <td>Smith</td>
              <td>30</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>David</td>
              <td>28</td>
              <td>India</td>
            </tr>
          </table>
        </div>
    </>
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

