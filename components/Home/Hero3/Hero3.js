import React from 'react';
import styles from './Hero3.module.css';
import Image from 'next/image';
import car from '../../../public/car.png';
import operator from '../../../public/operator.png';
import drive from '../../../public/drive.png';

const Hero3 = () => {
  return (
    <div className={styles.hero3}>
        <div className={styles.hero3_heading}>
            <h3>Plan your trip now</h3>
            <h1>Quick & easy car rental</h1>
        </div>
        <div className={styles.hero3_info}>
            <div>
                <Image src={car} alt="car"/>
                <h2>Select Car</h2>
                <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
            </div>
            <div>
                <Image src={operator} alt="operator"/>
                <h2>Contact Operator</h2>
                <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
            </div>
            <div>
                <Image src={drive} alt="drive"/>
                <h2>Let's Drive</h2>
                <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
            </div>
        </div>
    </div>
  )
}

export default Hero3