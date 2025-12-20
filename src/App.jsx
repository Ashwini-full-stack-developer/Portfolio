import { useState } from 'react'
import video1 from './assets/video1.mp4'
import './App.css'
import Project from './comp/Projects'
import Education from './comp/Education'
import Certification from './comp/Certification'
import Footer from './comp/Footer'

import Profile_picture from './assets/Profile_picture.png'
import Ashwini_Resume from './assets/AshwiniG_Resumes_UP.pdf'


import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='header'>
        <video className="header-video" autoPlay loop muted controls>
          <source src={video1} type="video/mp4" />
        </video>
        <h1 className="header-title">Full Stack Developer</h1>
      </div>

      <div className="project-container profile-section">
        <div id='Content' className="profile-content">
          <h1 id='cursiveText' className="profile-name">Ashwini G</h1>
          <h2 className="profile-role"><em>I am Full-Stack Developer , Gen-AI Developer @ <b>Almawiz Technology</b></em></h2>
          <p className="profile-bio">I believe that Working smart doesn't mean working less. It means Working hard on what truly matters. Passionate Full-Stack Developer with strong problem-solving abilities and leadership skills.  Dedicated to creating efficient, user-friendly, and scalablesoftware solutions.</p>
          <div className="ContactWays">
            <a className="social-icon" href="https://www.linkedin.com/in/ashwini-g-0866a0275/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a className="social-icon" href="https://github.com/Ashwini-full-stack-developer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a className="social-icon" href="https://www.youtube.com/channel/UCfgvGuldkghNEE3YoFyI-5g">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <button id='but'><a href={Ashwini_Resume} download={Ashwini_Resume}>Download CV</a></button>
          </div>
        </div>

        <img src={Profile_picture} className="profile-picture" alt="Profile Picture" />
      </div>

      <div className="section-title" id='TitalSkill'>Skills</div>

      <div className="project-container skill-container">

        <div className='Skillcard'>
          <h3>Frontend</h3>
          <ol>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>React JS</li>
          </ol>
        </div>
        <div className='Skillcard'>
          <h3>Backend</h3>
          <ol>
            <li>C Programming</li>
            <li>C# ASP.Net Core</li>
            <li>Java Basic</li>
            <li>Python Basic</li>
          </ol>
        </div>
        <div className='Skillcard'>
          <h3>DataBase</h3>
          <ol>
            <li>MS SQL Server(DDL , DML , DCL , TCL)</li>
          </ol>
        </div>
        <div className='Skillcard'>
          <h3>Tools</h3>
          <ol>
            <li>Code Block</li>
            <li>Net Bens</li>
            <li>VS Code</li>
            <li>Visual Studio</li>
          </ol>
        </div>
      </div>

      <div id='Menu'>
        <BrowserRouter>
          <div className="project-container menu-container">
            <Link className='TheButton' to="/">
              Education
            </Link>
            <Link className='TheButton' to="/Certification">
              My Gallery
            </Link>
            <Link className='TheButton' to="/Project">
              Projects
            </Link>
          </div>
          <div className='BodyContainer'>
            <Routes>
              <Route path='/' element={<Education />} />
              <Route path='/Certification' element={<Certification />} />
              <Route path='/Project' element={<Project />} />
            </Routes>
          </div>
        </BrowserRouter>

      </div>
      <Footer />
    </>
  )
}

export default App
