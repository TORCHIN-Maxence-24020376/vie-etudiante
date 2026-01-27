import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>🎓 IUT d'Aix-en-Provence</span>
          <h1 className={styles.title}>
            Le Cœur Numérique du <br />
            <span className={styles.highlight}>BUT Informatique</span>
          </h1>
          <p className={styles.subtitle}>
            Bienvenue sur le portail dédié aux étudiants du département informatique.
            Retrouvez les actualités, les projets, la vie associative et les offres de stage
            au même endroit.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/actualites" className={styles.primaryButton}>
              Découvrir les Actus
            </Link>
            <Link href="https://discord.gg/v4HF8dCXf7" className={styles.secondaryButton}>
              Rejoindre le Discord
            </Link>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className={styles.featuresSection}>
        <div className={styles.grid}>
          {/* Card 1: Projects (Large) */}
          <div className={`${styles.card} ${styles.cardLarge} ${styles.bgBlue}`}>
            <span className={styles.cardIcon}>💻</span>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Projets & Hackathons</h2>
              <p className={styles.cardDesc}>
                Découvrez les réalisations des étudiants : applications web, jeux vidéo,
                IA et sécurité. Participez aux nuits du code et à la Code Game Jam.
              </p>
            </div>
          </div>

          {/* Card 2: BDE */}
          <div className={`${styles.card} ${styles.bgPurple}`}>
            <span className={styles.cardIcon}>🎉</span>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Vie du Campus</h2>
              <p className={styles.cardDesc}>
                Soirées, intégration, voyages... Tout ce qu'il faut savoir sur
                le BDE et les assos de l'IUT.
              </p>
            </div>
          </div>

          {/* Card 3: Internships */}
          <div className={`${styles.card} ${styles.bgOrange}`}>
            <span className={styles.cardIcon}>💼</span>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Stages & Jobs</h2>
              <p className={styles.cardDesc}>
                Consultez les offres exclusives de nos partenaires pour vos stages
                et alternances.
              </p>
            </div>
          </div>

          {/* Card 4: Community (Large) */}
          <div className={`${styles.card} ${styles.cardLarge} ${styles.bgGreen}`}>
            <span className={styles.cardIcon}>🤝</span>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Entraide & Tutorat</h2>
              <p className={styles.cardDesc}>
                Besoin d'aide en Java ou en Math ? Retrouvez les sessions de tutorat
                organisées par les 2èmes et 3èmes années.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
