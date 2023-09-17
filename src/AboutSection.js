import React from "react";

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

export default AboutSection;