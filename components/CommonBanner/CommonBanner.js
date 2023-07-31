import React from 'react';
import styles from './CommonBanner.module.css';
import { FaPhoneAlt } from 'react-icons/fa';

const CommonBanner = () => {
  return (
    <div className={styles.commonBanner}>
        <h1><span>Book a car by getting in touch with us </span><span className={styles.phone_number}><FaPhoneAlt /> (123) 456-789</span></h1>
    </div>
  )
}

export default CommonBanner