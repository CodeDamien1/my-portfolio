import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <a className="navbar-brand" href="#home">My Portfolio</a>
          <ul className="navbar-nav">
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#projects">Projects</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="App-main">
        <section id="home">
          <div className="intro">
            <h1>Welcome to My Portfolio!</h1>
            <p className="lead">I am a senior web developer with expertise in front-end development and UI/UX design. I create elegant and user-centered web experiences that drive engagement and achieve business goals.</p>
          </div>
        </section>

        <section id="about">
          <div className="content">
            <h2>About Me</h2>
            <p>I have over 10 years of experience working with various clients and agencies, delivering high-quality websites and web applications. My skills include HTML5, CSS3, JavaScript, React, and responsive design.</p>
          </div>
        </section>

        <section id="projects">
          <div className="content">
            <h2>My Projects</h2>
            <ul className="projects-list">
              <li>
                <h3>Project 1</h3>
                <p>Description of Project 1</p>
                <div className="project-demo">
                  {/* Add interactive elements or demos for the project */}
                </div>
              </li>
              <li>
                <h3>Project 2</h3>
                <p>Description of Project 2</p>
                <div className="project-demo">
                  {/* Add interactive elements or demos for the project */}
                </div>
              </li>
              <li>
                <h3>Project 3</h3>
                <p>Description of Project 3</p>
                <div className="project-demo">
                  {/* Add interactive elements or demos for the project */}
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section id="contact">
          <div className="content">
            <h2>Contact Me</h2>
            <p>Please feel free to get in touch with me. I'm available for freelance work, collaboration, or any exciting opportunities.</p>
            <ul className="contact-info">
              <li>Email: example@example.com</li>
              <li>Phone: 123-456-7890</li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">Your Profile</a></li>
            </ul>
          </div>
        </section>

        <section id="testimonials">
          <div className="content">
            <h2>Testimonials</h2>
            <div className="testimonials-list">
              {/* Add testimonials or recommendations from clients */}
            </div>
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
