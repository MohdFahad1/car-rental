import React from 'react'
import styles from './page.module.css';
import Common from '../../../components/CommonBg/Common';
import { FaPhoneAlt, FaEnvelope, FaEnvelopeOpenText } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const page = () => {
  const data = {
    name: "Contact",
  };
  return (
    <div>
      <Common myData={data} />
      <div className={styles.contact}>
        <div className={styles.contact_text}>
          <h1>Need additional information?</h1>
          <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
          <div className={styles.contact_icon}>
          <span><FaPhoneAlt /> (123) 456-789</span>
          <span><FaEnvelope />carrental@carmail.com</span>
          <span><MdLocationOn />Delhi, India</span>
          </div>
        </div>
        <div className={styles.form_container}>
          <form>
          <label>Full Name <span>*</span></label>
          <input type="text" placeholder="E.g:John Doe"/>
          <label>Email <span>*</span></label>
          <input type="email" placeholder="youremail@example.com"/>
          <label>Tell us about it <span>*</span></label>
          <textarea type="text" placeholder="Write Here.." rows={10}></textarea>
          <button><FaEnvelopeOpenText />Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page