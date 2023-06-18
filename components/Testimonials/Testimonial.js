import React from 'react';
import styles from './Testimonial.module.css';
import Image from 'next/image';
import { FaQuoteRight } from "react-icons/fa";
import pfp1 from '../../public/pfp1.png';
import pfp2 from '../../public/pfp2.png';

const Testimonial = () => {
  return (
    <div className={styles.testimonial}>
        <div className={styles.testimonial_text}>
            <h3>Reviewed by People</h3>
            <h1>Client's Testimonials</h1>
            <p>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
        </div>
        <div className={styles.testimonial_card_container}>
            <div className={styles.testimonial_card}>
                <p>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
                <div className={styles.pfp_container}>
                    <div className={styles.pfp_inner_container}>
                        <Image src={pfp1} alt="pfp"/>
                        <div>
                        <h2>Parry Hotter</h2>
                        <p>Belgrade</p>
                        </div>
                    </div>
                    <FaQuoteRight className={styles.testimonial_icon}/>
                </div>
            </div>

            <div className={styles.testimonial_card}>
                <p>"The car was in great condition and made our trip even better. Highly recommend for this car rental website! "</p>
                <div className={styles.pfp_container}>
                    <div className={styles.pfp_inner_container}>
                        <Image src={pfp2} alt="pfp"/>
                        <div>
                        <h2>Ron Rizzly</h2>
                        <p>Novi Sad</p>
                        </div>
                    </div>
                    <FaQuoteRight className={styles.testimonial_icon}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial