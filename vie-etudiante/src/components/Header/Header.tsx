import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navContainer}>
                <Link href="/" className={styles.logo}>
                    Vie Étudiante
                </Link>

                <div className={styles.navLinks}>
                    <Link href="/actualites" className={styles.link}>
                        Actualités
                    </Link>
                    <Link href="/bde" className={styles.link}>
                        Évènements BDE
                    </Link>
                    <Link href="/etudes" className={styles.link}>
                        Études
                    </Link>
                    <Link href="/alumni" className={styles.link}>
                        Alumni
                    </Link>
                    <Link href="/contact" className={styles.ctaButton}>
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
