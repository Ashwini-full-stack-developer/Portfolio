import React from 'react'
import './Certificate.css'
import img1 from '/image1.jpeg'
import img2 from '/image2.jpeg'
import img3 from '/image3.jpeg'
import img4 from '/image4.jpeg'
import img5 from '/image5.jpeg'
import img6 from '/image6.jpeg'
import img7 from '/image7.jpeg'
import img8 from '/image8.jpeg'
import img9 from '/image9.jpeg'
import img10 from '/image10.jpeg'
import img11 from '/image11.jpeg'
import img12 from '/image12.jpeg'
import img13 from '/image13.jpeg'
import img14 from '/image14.jpeg'
import img15 from '/image15.jpeg'
import img16 from '/img.jpeg'
import img17 from '/img1.jpeg'

export default function Certification() {
  const certificates = [
    { src: img16, title: "My Graduation Day" },
    { src: img17, title: "Kurg Water fals" },
    { src: img1, title: "Lighthouse view in Udupi" },
    { src: img2, title: "Placed in Almawiz & TCS" },
    { src: img3, title: "Zoo visiting" },
    { src: img4, title: "Graduation Day Event 2024" },
    { src: img5, title: "Freshers Day Event 2024" },
    { src: img6, title: "NoSQL - J.H. Patel College" },
    { src: img7, title: "ICCA - Hackthon 2k23" },
    { src: img8, title: "Infosis Mysore" },
    { src: img9, title: "Infosis Mysore" },
    { src: img10, title: "Mysuru Palace" },
    { src: img11, title: "Paper presentaction" },
    { src: img12, title: "Gameing Time @ trip" },
    { src: img13, title: "My Graduation Day" },
    { src: img14, title: "Project development time" },
    { src: img15, title: "Exam prepration at night" }
  ];

  return (
    <div className='certification-wrapper'>
      <h1 className='certification-heading'>My professional gallery</h1>
      <div className='gallery-marquee'>
        <div className='gallery-track'>
          {[...certificates, ...certificates].map((cert, index) => (
            <div key={index} className='gallery-item'>
              <img src={cert.src} alt={cert.title} className='gallery-image' />
              <div className='gallery-overlay'>
                <h3 className='gallery-title'>{cert.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
