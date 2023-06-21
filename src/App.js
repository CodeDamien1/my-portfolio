import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="App-main">
        <section id="home">
          <h2>Welcome to My Portfolio!</h2>
          <p className="lead">I am a new junior web developer with expertise in front-end development and UI/UX design. I create elegant and user-centered web experiences that drive engagement and achieve business goals.</p>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <p>self description here</p>
        </section>

        <section id="projects">
          <h2>My Projects</h2>
          <ul className="projects-list">
            <li>
              <h3>Project 1</h3>
              <p>Description of Project 1</p>
            </li>
            <li>
              <h3>Project 2</h3>
              <p>Description of Project 2</p>
            </li>
            <li>
              <h3>Project 3</h3>
              <p>Description of Project 3</p>
            </li>
          </ul>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <p>Please feel free to get in touch with me. I'm available for freelance work, collaboration, or any exciting opportunities.</p>
          <ul className="contact-info">
            <li>Email: example@example.com</li>
            <li>Phone: 123-456-7890</li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">Your Profile</a></li>
          </ul>
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
