import React from 'react';
import styles from './page.module.css';
import Common from '../../../components/CommonBg/Common'
import Image from 'next/image';
import people from '../../../public/about-people.png';
import icon1 from '../../../public/about-icon1.png';
import icon2 from '../../../public/about-icon2.png';
import icon3 from '../../../public/about-icon3.png';
import Hero3 from '../../../components/Home/Hero3/Hero3';
import CommonBanner from '../../../components/CommonBanner/CommonBanner';

const page = () => {
  const data = {
    name:"About",
  };
  
  return (
    <div>
    <div>
      <Common myData={data}/>
      </div>
      <div  className={styles.about}>
        <div>
          <Image src={people} alt="people"/>
        </div>

        <div className={styles.about_text}>
          <h3>About Company</h3>
          <h1 className={styles.adventure}>You start the engine and your adventure begins</h1>
          <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>

          <div className={styles.about_icon_container}> 

            <div className={styles.about_icon}>
              <Image src={icon1} alt="icon"/>
              <div>
                <h1>20</h1>
                <span>Car Types</span>
              </div>
            </div>

            <div className={styles.about_icon}>
              <Image src={icon2} alt="icon"/>
              <div>
                <h1>85</h1>
                <span>Rental Outlets</span>
              </div>
            </div>

            <div className={styles.about_icon}>
              <Image src={icon3} alt="icon"/>
              <div>
                <h1>75</h1>
                <span>Repair Shop</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      <Hero3 />
      <CommonBanner />
    </div>
  )
}

export default page