import React from 'react';
// import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Logo from '../../public/logo.png'

const Navbar = () => {
  return (
    <>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src={Logo} alt="logo" width={130} height={45}/>
            </div>
            <div className={styles.links}>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Vehicle Models
                    </li>
                    <li>
                        Testimonials
                    </li>
                    <li>
                        Our Team
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </div>
            <div className={styles.btn}>
                <button className={styles.sign}>Sign In</button>
                <button className={styles.reg}>Register</button>
            </div>
        </nav>
    </>
  )
}

export default Navbar