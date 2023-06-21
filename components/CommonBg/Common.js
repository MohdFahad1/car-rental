import React from 'react';
import styles from './Common.module.css';
import Image from 'next/image';
import bg from '../../public/about-banner.png';

const Common = ({myData}) => {
    const {name} = myData;
  return (
    <div className={styles.common}>
        <div className={styles.overlay}>
        <Image src={bg} alt="car"/>
        </div>
        <h1>{name}</h1>
        <h4>Home / {name}</h4>
    </div>
  )
}

export default Common