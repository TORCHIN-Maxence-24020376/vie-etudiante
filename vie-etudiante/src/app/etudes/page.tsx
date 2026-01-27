import styles from '../inner.module.css';

export default function Etudes() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <h1 className={styles.title}>Études & Ressources</h1>
                <p className={styles.subtitle}>
                    Tout pour réussir votre BUT Informatique : tutorat, fiches de révisions et outils.
                </p>
            </section>

            <section className={styles.section}>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Tutorat par les pairs</h2>
                        <p className={styles.cardDesc}>
                            Des séances de révisions organisées par les étudiants de 2ème et 3ème année
                            pour aider les 1ères années (Java, SQL, Math).
                        </p>
                        <a href="#" className={styles.cardLink}>Voir les créneaux →</a>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Projet Voltaire</h2>
                        <p className={styles.cardDesc}>
                            Accès à la plateforme pour améliorer votre orthographe, indispensable
                            pour la certification de fin d'année.
                        </p>
                        <a href="#" className={styles.cardLink}>Accéder →</a>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Documentation Technique</h2>
                        <p className={styles.cardDesc}>
                            Accès MSDNAA, JetBrains Student Pack et autres licences logicielles
                            offertes par l'IUT.
                        </p>
                        <a href="#" className={styles.cardLink}>Récupérer ma licence →</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
