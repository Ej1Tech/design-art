'use client'
import { useState } from 'react';
import Link from 'next/link';
import styles from './styles/header.module.css';
export default function Header() {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleMenu = () => {
          setIsOpen(!isOpen);
        };
      
    return (
        <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">Design Art</Link>
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          &#9776;
        </div>
        <nav className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <ul >
          <li><Link href="/">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
        <select className={styles.languageSelector}>
        <option value="en" >English</option>
        <option value="ar">Arabic</option>
        <option value="fr">French</option>
        </select>
        </nav>
      </header>
    )
}