import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brandColumn}>
                    <h2>Vie Étudiante</h2>
                    <p className={styles.brandDescription}>
                        La plateforme du département BUT Informatique d'Aix-en-Provence.
                        Actualités, évènements BDE et ressources pédagogiques.
                    </p>
                </div>

                <div className={styles.column}>
                    <h3>Navigation</h3>
                    <div className={styles.linkList}>
                        <Link href="/actualites" className={styles.link}>Actualités</Link>
                        <Link href="/bde" className={styles.link}>Vie Étudiante (BDE)</Link>
                        <Link href="/etudes" className={styles.link}>Études & Ressources</Link>
                        <Link href="/contact" className={styles.link}>Contact</Link>
                    </div>
                </div>

                <div className={styles.column}>
                    <h3>Département</h3>
                    <div className={styles.linkList}>
                        <Link href="https://iut.univ-amu.fr/" className={styles.link} target="_blank">IUT d'Aix-Marseille</Link>
                        <Link href="/alumni" className={styles.link}>Alumni</Link>
                        <Link href="/partenaires" className={styles.link}>Partenaires</Link>
                    </div>
                </div>

                <div className={styles.column}>
                    <h3>Administration</h3>
                    <Link href="/admin" className={styles.adminBtn}>
                        <span className={styles.adminIcon}>🔒</span> Dashboard Admin
                    </Link>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <p>&copy; {currentYear} Vie Étudiante - BUT Informatique Aix. Fait avec passion.</p>
                <div className={styles.legalLinks}>
                    <Link href="/legal" className={styles.legalLink}>Mentions Légales</Link>
                    <Link href="/privacy" className={styles.legalLink}>Politique de Confidentialité</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
