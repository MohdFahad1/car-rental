import React from 'react';
import styles from './Donwload.module.css';
import mobile from '../../../public/donwloadApp.png';
import Image from 'next/image';
import playstore from '../../../public/playstore.png';
import appstore from '../../../public/appstore.png';

const Donwload = () => {
  return (
    <div className={styles.download_section}>
        <div className={styles.image}>
            {/* <Image src={mobile} alt="Mobile-App" className={styles.download_image}/> */}
        </div>
        <div className={styles.download_desc}>
            <h1>Donwload our app to get most out of it</h1>
            <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
            <div className={styles.image_section}>
                <Image src={playstore} alt="playstore" className={styles.download_images_playstore}/>
                <Image src={appstore} alt="appstore" className={styles.download_images_appstore}/>
            </div>
        </div>
    </div>
  )
}

export default Donwload