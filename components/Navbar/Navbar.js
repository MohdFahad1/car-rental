'use client'
import React from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Logo from '../../public/logo.png';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src={Logo} alt="logo" width={130} height={45}/>
            </div>
            <div className={styles.links}>
                <ul>
                    <Link href="/">
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link href="/about">
                        <li>
                            About
                        </li>
                    </Link>
                    <Link href="/vehicle">
                        <li>
                            Vehicle Models
                        </li>
                    </Link>
                    <Link href="/testimonials">
                        <li>
                            Testimonials
                        </li>
                    </Link>
                    <Link href="/team">
                        <li>
                            Our Team
                        </li>
                    </Link>
                    <Link href="/contact">
                        <li>
                            Contact
                        </li>
                    </Link>
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