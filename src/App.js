
import './App.css';
import React from 'react';
function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <h1>Naga Mahendra</h1>
      </header>

      <div className="content">
        <section className="section">
          <h2>Introduction</h2>
          <p>
            I'm Naga Mahendra, a B.Tech student with a passion for Artificial Intelligence and Machine Learning.
          </p>
        </section>

        <section className="section">
          <h2>Skills</h2>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>Data Structures</li>
            <li>HTML & CSS</li>
            <li>SQL</li>
            <li>JavaScript</li>
          </ul>
        </section>

        <section className="section">
          <h2>Projects</h2>
          <ul>
            <li>Fraud Detection</li>
            <li>Image Recognition</li>
            <li>Hotel Booking Website</li>
            <li>Home Automation</li>
          </ul>
        </section>

        <section className="section">
          <h2>Contact</h2>
          <a href="mailto:mahendrapachipala123@gmail.com">Email me</a>
        </section>
      </div>
    </div>
  );
}

export default App; // Add this export statement to make the component available for use in other parts of your application
