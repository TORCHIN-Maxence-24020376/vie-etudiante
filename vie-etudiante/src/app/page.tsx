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
          {/* Card 1: Évènements (Large) - Anciennement "Projets & Hackathons" */}
          <Link href="/evenements" className={`${styles.card} ${styles.cardLarge} ${styles.bgBlue}`}>
            <img src="/images/evenements.jpg" alt="Évènements" className={styles.cardImage} />
            <span className={styles.cardIcon}>🎯</span>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Évènements</h2>
              <p className={styles.cardDesc}>
                Découvrez les réalisations des étudiants : applications web, jeux vidéo,
                IA et sécurité. Participez aux nuits du code et à la Code Game Jam.
              </p>
            </div>
          </Link>

          {/* Card 2: Vie du Campus */}
          <Link href="/actualites" className={`${styles.card} ${styles.bgPurple}`}>
            <img src="/images/actualites.jpg" alt="Vie du Campus" className={styles.cardImage} />
            <span className={styles.cardIcon}>🎉</span>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Vie du Campus</h2>
              <p className={styles.cardDesc}>
                Soirées, intégration, voyages... Tout ce qu'il faut savoir sur
                le BDE et les assos de l'IUT.
              </p>
            </div>
          </Link>

          {/* Card 3: Études & Carrière - Anciennement "Stages & Jobs" */}
          <Link href="/stages" className={`${styles.card} ${styles.bgOrange}`}>
            <img src="/images/etudes.jpg" alt="Études & Carrière" className={styles.cardImage} />
            <span className={styles.cardIcon}>💼</span>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Études & Carrière</h2>
              <p className={styles.cardDesc}>
                Consultez les offres exclusives de nos partenaires pour vos stages
                et alternances.
              </p>
            </div>
          </Link>

          {/* Card 4: Alumnis (Nouvelle) */}
          <Link href="/alumni" className={`${styles.card} ${styles.bgGreen}`}>
            <img src="/images/alumni.jpg" alt="Alumnis" className={styles.cardImage} />
            <span className={styles.cardIcon}>🎓</span>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Alumnis</h2>
              <p className={styles.cardDesc}>
                Connectez-vous avec les anciens étudiants, découvrez leurs parcours
                et bénéficiez de leur expérience professionnelle.
              </p>
            </div>
          </Link>

          {/* Card 5: Vie Étudiante (Nouvelle) */}
          <Link href="/vie-etudiante" className={`${styles.card} ${styles.bgBlue}`}>
            <img src="/images/vie-etudiante.jpg" alt="Vie Étudiante" className={styles.cardImage} />
            <span className={styles.cardIcon}>🌟</span>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Vie Étudiante</h2>
              <p className={styles.cardDesc}>
                Toutes les informations pratiques pour votre quotidien : logement,
                restauration, sport et culture à l'IUT.
              </p>
            </div>
          </Link>

          {/* Card 6: Entraide & Tutorat */}
          <Link href="/tutorat" className={`${styles.card} ${styles.bgPurple}`}>
            <img src="/images/entraide-tutorat.jpg" alt="Entraide & Tutorat" className={styles.cardImage} />
            <span className={styles.cardIcon}>🤝</span>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Entraide & Tutorat</h2>
              <p className={styles.cardDesc}>
                Besoin d'aide en code ou en maths ? Retrouvez les sessions de tutorat
                organisées par les 2èmes et 3èmes années.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
