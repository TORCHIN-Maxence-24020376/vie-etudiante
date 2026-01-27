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
                        La plateforme numéro 1 pour l'actualité, les bons plans et la culture étudiante en France.
                        Informez-vous, partagez, vivez.
                    </p>
                </div>

                <div className={styles.column}>
                    <h3>Navigation</h3>
                    <div className={styles.linkList}>
                        <Link href="/actualites" className={styles.link}>Actualités</Link>
                        <Link href="/campus" className={styles.link}>Campus</Link>
                        <Link href="/culture" className={styles.link}>Culture</Link>
                        <Link href="/jobs" className={styles.link}>Jobs & Stages</Link>
                    </div>
                </div>

                <div className={styles.column}>
                    <h3>À Propos</h3>
                    <div className={styles.linkList}>
                        <Link href="/qui-sommes-nous" className={styles.link}>Qui sommes-nous ?</Link>
                        <Link href="/contact" className={styles.link}>Contact</Link>
                        <Link href="/partenaires" className={styles.link}>Devenir Partenaire</Link>
                        <Link href="/equipe" className={styles.link}>L'Équipe</Link>
                    </div>
                </div>

                <div className={styles.column}>
                    <h3>Suivez-nous</h3>
                    <div className={styles.socials}>
                        {/* Using simple placeholders for icons to avoid SVG bloat for now */}
                        <a href="#" className={styles.socialIcon} aria-label="Twitter">𝕏</a>
                        <a href="#" className={styles.socialIcon} aria-label="Instagram">In</a>
                        <a href="#" className={styles.socialIcon} aria-label="LinkedIn">Li</a>
                    </div>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <p>&copy; {currentYear} Vie Étudiante. Tous droits réservés.</p>
                <div className={styles.legalLinks}>
                    <Link href="/legal" className={styles.legalLink}>Mentions Légales</Link>
                    <Link href="/privacy" className={styles.legalLink}>Politique de Confidentialité</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
