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
            <Link href="https://discord.gg/v4HF8dCXf7" className={styles.discordButton}>
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
                className={styles.discordIcon}
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01a13.925 13.925 0 0 0 11.106 0a.074.074 0 0 1 .077.01c.124.097.248.195.372.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.947 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.946 2.419-2.157 2.419z" />
              </svg>
              <span>Rejoindre le Discord</span>
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
