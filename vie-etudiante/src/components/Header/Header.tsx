"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu on link click
    const closeMenu = () => setIsMenuOpen(false);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <header className={styles.header}>
            <nav className={styles.navContainer}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    Vie Étudiante
                </Link>

                {/* Mobile Burger Button */}
                <button
                    className={`${styles.burger} ${isMenuOpen ? styles.burgerActive : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Desktop and Mobile Menu */}
                <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
                    <Link href="/actualites" className={styles.link} onClick={closeMenu}>
                        Actualités
                    </Link>
                    <Link href="/bde" className={styles.link} onClick={closeMenu}>
                        Évènements BDE
                    </Link>
                    <Link href="/etudes" className={styles.link} onClick={closeMenu}>
                        Études
                    </Link>
                    <Link href="/alumni" className={styles.link} onClick={closeMenu}>
                        Alumni
                    </Link>
                    <Link href="/contact" className={styles.ctaButton} onClick={closeMenu}>
                        Contact
                    </Link>
                </div>
            </nav>

            {/* Overlay for mobile menu */}
            {isMenuOpen && <div className={styles.overlay} onClick={closeMenu} />}
        </header>
    );
};

export default Header;
