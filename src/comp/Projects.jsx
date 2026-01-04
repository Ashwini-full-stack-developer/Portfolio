import React from 'react'
import './Project.css'

export default function Projects() {
  const projectData = [
    {
      title: "Home Service Providers",
      description: "As a team in our college, we successfully demonstrated a project built using .NET Core API, React.js, and SQL Server. Our project was designed to solve real-world problems, showcasing our ability to develop a fully functional application with modern technologies.",
      link: "https://github.com/Ashwini-full-stack-developer/HomeService"
    },
    {
      title: " Farmer Growth Project",
      description: "The Fromer growth project is a web application designed to offer a command platform for former agricultural product companies, product selling shops, and administrative users.",
      link: "https://github.com/Ashwini-full-stack-developer/FormerGrowth"
    },
    {
      title: "Hackathon GenAI Chatbot",
      description: " Developed an AI-powered registration chatbot for university hackathons, leveraging Generative AI to streamline the participant enrollment process through a natural, conversational interface.",
      link: null 
    },
    {
      title: "CandyMan Project",
      description: " The web application, tentatively named Candy Man is designed as a platform for users to conveniently browse and order a variety of candies and chocolates online.",
      link: "https://github.com/Ashwini-full-stack-developer/CandyMan"
    },
    {
      title: "Data Structures and Algorithm Project",
      description: "As a team, we developed a project during Hackathon 2K23 using Code::Blocks IDE. Incorporating data structure concepts and leveraging the principles of header files.",
      link: "https://github.com/Ashwini-full-stack-developer/Algorithm"
    },
    {
      title: "Textual Treasure",
      description: "Textual Treasure is a project developed using HTML, CSS, JavaScript, and the React library. It fetches book information from the Google Books API to provide users with valuable insights about various books.",
      link: "https://github.com/Ashwini-full-stack-developer/Book"
    },
    {
      title: "Country's App",
      description: "The Country App is a website that provides information about various countries using a free API service. It is developed with React.js and styled with CSS, using VS Code as the primary code editor.",
      link: "https://github.com/Ashwini-full-stack-developer/Country"
    }
  ];

  return (
    <div className='projects-wrapper'>
      <h1 className='projects-heading'>Featured Projects</h1>
      <div className='projects-grid'>
        {projectData.map((project, index) => (
          <div key={index} className='project-card' style={{ '--delay': index }}>
            <div className='card-content'>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Source <i className="fa-brands fa-github"></i>
                </a>
              )}
            </div>
            <div className="card-decoration"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
