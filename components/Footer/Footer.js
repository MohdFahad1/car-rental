import React from 'react';
import styles from './Footer.module.css';
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_first}>
          <h1>CAR <span>Rental</span></h1>
          <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
          <div className={styles.footer_first_contact}>
            <p><FaPhone style={{marginRight:"10px"}}/>(123)-456-789</p>
            <p><FaEnvelope style={{marginRight:"10px"}}/>carrental@gmail.com</p>
            <p>Design by XpeedStudio</p>
          </div>
        </div>
        <div className={styles.footer_second}>
          <h1>COMPANY</h1>
          <p>New York</p>
          <p>Careers</p>
          <p>Mobile</p>
          <p>Blog</p>
          <p>How we work</p>
        </div>
        <div className={styles.footer_third}>
          <h1>WORKING HOURS</h1>
          <p>Mon - Fri: 9:00AM - 9:00PM</p>
          <p>Sat: 9:00AM - 7:00PM</p>
          <p>Sun: Closed</p>
        </div>
        <div className={styles.footer_fourth}>
          <h1>SUBSCRIPTION</h1>
          <p>Subscribe your Email address for latest news & updates</p>
          <div></div>
            <input type="email" placeholder='Enter Email Address'/>
            <button>Submit</button>
        </div>
      </footer>
    </>
  )
}

export default Footer