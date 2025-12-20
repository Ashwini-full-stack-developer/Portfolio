import React from 'react'
import './Education.css'

export default function Education() {
  const educationList = [
    {
      level: "Degree (BCA)",
      institution: "Interface College of Computer Application (ICCA)",
      location: "Davanagere, Karnataka",
      score: "CGPA: 8.9",
      year: "2022-2025",
      description: "I am studying for a Bachelor of Computer Applications (BCA) degree at ICCA, affiliated with Davanagere University. The college is located at 18th Cross, Janeya Badavane, Sai Plaza, Davanagere."
    },
    {
      level: "Pre-University (PU)",
      institution: "DRM College",
      location: "Davanagere, Karnataka",
      score: "Percentage: 68%",
      year: "2021 - 2022",
      description: "I completed my Pre-University (PU) education in the PCMB stream at DRM College, located on Hadadi Road near Davanagere Stadium."
    },
    {
      level: "High School",
      institution: "Karnataka Public School (KPS)",
      location: "Davanagere District",
      score: "Percentage: 78%",
      year: "2020 - 2021",
      description: "I completed my high school education at KPS. This helped me to develop essential skills that prepared me well for my Pre-University studies and beyond."
    },
    {
      level: "Primary Education",
      institution: "Prakruthi Vidyalaya",
      location: "Thyavanige, Channagiri Taluk",
      score: "",
      year: "",
      description: "I completed my primary education at Prakruthi Vidyalaya. This early education helped me build a strong foundation of knowledge and curiosity."
    }
  ];

  return (
    <div className='education-wrapper'>
      <h1 className='education-heading'>My Educational Journey</h1>
      <div className='education-timeline'>
        {educationList.map((edu, index) => (
          <div key={index} className='education-card' style={{ '--i': index }}>
            <div className='edu-content'>
              <div className='edu-header'>
                <h2 className='edu-level'>{edu.level}</h2>
                <span className='edu-year'>{edu.year}</span>
              </div>
              <h3 className='edu-institution'>{edu.institution}</h3>
              <p className='edu-location'>{edu.location}</p>
              {edu.score && <div className='edu-score'>{edu.score}</div>}
              <p className='edu-description'>{edu.description}</p>
            </div>
            <div className='timeline-dot'></div>
          </div>
        ))}
      </div>
    </div>
  )
}
