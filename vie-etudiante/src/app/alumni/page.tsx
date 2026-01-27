import styles from '../inner.module.css';

export default function Alumni() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <h1 className={styles.title}>Réseau Alumni</h1>
                <p className={styles.subtitle}>
                    Gardez le lien avec les anciens de l'IUT d'Aix et développez votre réseau professionnel.
                </p>
            </section>

            <section className={styles.section}>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Annuaire des Anciens</h2>
                        <p className={styles.cardDesc}>
                            Retrouvez la liste des diplômés du BUT Informatique d'Aix depuis 2010.
                        </p>
                        <a href="#" className={styles.cardLink}>Consulter l'annuaire →</a>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Groupe LinkedIn</h2>
                        <p className={styles.cardDesc}>
                            Rejoignez notre groupe privé pour échanger des offres d'emploi et
                            des conseils de carrière.
                        </p>
                        <a href="#" className={styles.cardLink}>Rejoindre le groupe →</a>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Témoignages</h2>
                        <p className={styles.cardDesc}>
                            Découvrez les parcours inspirants de nos anciens élèves : ingénieurs,
                            développeurs freelance, chefs de projet...
                        </p>
                        <a href="#" className={styles.cardLink}>Lire les interviews →</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
