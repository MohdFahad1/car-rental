import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';
import car from '../../public/hero-car.png';
import bg from '../../public/hero-bg.png';
import { FaCheckCircle, FaChevronRight } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero_text}>
          <h3>Plan your trip now</h3>
          <h1>Save <span>big</span> with our car rental</h1>
          <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
          <div className={styles.hero_btn}>
            <button className={styles.book_btn}>Book Ride <FaCheckCircle /></button>
            <button className={styles.learn_btn}>Learn More <FaChevronRight /></button>
          </div>
        </div>
        <div className={styles.hero_img}>
          <Image src={car} alt="car" height={500} width={850} className={styles.car_img}/>
          <Image src={bg} alt="bg" className={styles.bg_img} />
      </div>
      </div>
    </>
  )
}

export default Hero;