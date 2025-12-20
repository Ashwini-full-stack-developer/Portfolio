import React from 'react'
import './Footer.css'
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';
import { useState, useRef } from 'react';


Modal.setAppElement('#root');


export default function Footer() {


  const [isVisible, setIsVisible] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_gp37g6o',
        'template_qqabkfm',
        form.current,
        { publicKey: 'EILxByR12-jrSm8jl' }
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          console.log('SUCCESS!', result.text);
          setIsVisible(false);
          form.current.reset();
        },
        (error) => {
          alert('Message failed to send. Please try again.');
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="TheFooter">
      <button className="ContactBar" onClick={() => setIsVisible(true)}>
        <i className="fa-regular fa-id-card"></i>
        <p>Contact Me?</p>
      </button>

      <Modal
        isOpen={isVisible}
        onRequestClose={() => setIsVisible(false)}
        contentLabel="Contact Form"
        className="popup-modal"
        overlayClassName="overlay"
      >
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name:</label>
          <input type="text" name="from_name" placeholder="Enter your name" required />

          <label>Email:</label>
          <input type="email" name="from_email" placeholder="Enter your email" required />

          <label>Message:</label>
          <textarea name="message" placeholder="Your message..." required></textarea>

          <button type="submit" className="submit-button">Send</button>
        </form>

        <button className="close-button" onClick={() => setIsVisible(false)}>Close</button>
      </Modal>

      <div className='PersonalInfo'>
        <div className='TheAddress'>
          <h2>contact : </h2>
          <p>State : Karnataka - 577525</p>
          <p>Address : Davanagere ||Ds|| , Channagere ||Tq|| , Thyavanage Camp.</p>
          <p>Email address : seelamashwini2906@gmail.com</p>
          <p>Phone number : 9591941837</p>
          <p>Location : <a href='https://www.google.com/maps/place/Thyavanige+Camp/@14.2664966,75.8844599,10z/data=!4m6!3m5!1s0x3bba3790e9ad8faf:0xb44523fb28e5ed2c!8m2!3d14.2665199!4d75.8840328!16s%2Fg%2F1hhvz10bg?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D'>Click hear to navigate the Location</a></p>
        </div>

      </div>
    </div>
  )
}
