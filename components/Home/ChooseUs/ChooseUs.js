import React from 'react';
import styles from './ChooseUs.module.css';
import Cars from '../../../public/Cars.png';
import Image from 'next/image';
import choose1 from '../../../public/chooseuscar.png';
import choose2 from '../../../public/chooseusprice.png';
import choose3 from '../../../public/chooseuscharges.png';
import { FaChevronCircleRight } from "react-icons/fa";

const Choose = () => {
  return (
    <div className={styles.choose}>
    <div className={styles.main_img}>
        <Image src={Cars} alt="cars"/>
    </div>
        <div className={styles.choose_main}>
            <div className={styles.choose_text}>
                <h3>Why Choose Us</h3>
                <h1>Best valued deals you will ever find</h1>
                <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
                <div className={styles.detail_btn}>
                <button>Find Details <FaChevronCircleRight /> </button>
                </div>
            </div>
            <div className={styles.choose_img}>
                <div className={styles.content}>
                    <Image src={choose1} alt=""/>
                    <div>
                        <h1>Cross Country Drive</h1>
                        <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                    </div>
                </div>
                <div className={styles.content}>
                    <Image src={choose2} alt=""/>
                    <div>
                        <h1>All Inclusive Pricing</h1>
                        <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
                    </div>
                </div>
                <div className={styles.content}>
                    <Image src={choose3} alt="" />
                    <div>
                        <h1>No Hidden Charges</h1>
                        <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Choose