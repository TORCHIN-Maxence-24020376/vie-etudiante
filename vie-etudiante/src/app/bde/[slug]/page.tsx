import Link from 'next/link';
import styles from '../../inner.module.css';
import contentData from '../../../data/content.json';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return contentData.events.map((item) => ({
        slug: item.slug,
    }));
}

export default async function EventDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const event = contentData.events.find((item) => item.slug === slug);

    if (!event) {
        notFound();
    }

    return (
        <main className={styles.main}>
            {/* Editorial Header */}
            <section className={styles.hero} style={{ paddingBottom: '2rem' }}>
                <div className={styles.detailHeader}>
                    <span className={styles.categoryBadge}>{event.category}</span>
                </div>
                <h1 className={styles.title}>{event.title}</h1>
                <div className={styles.detailMetaGroup}>
                    <span className={styles.detailDate}>{event.date}</span>
                    <span>•</span>
                    <span style={{ color: '#888' }}>Évènement BDE</span>
                </div>
            </section>

            {/* Article Content */}
            <article className={styles.articleContainer}>
                {/* Event Specific Card */}
                <div className={styles.eventMetaBox}>
                    <span className={styles.priceTag}>{event.price}</span>
                    <a href="#" className={styles.cardLink}>S'inscrire Maintenant →</a>
                </div>

                <p className={styles.journalLead}>
                    {event.desc}
                </p>

                <hr className={styles.detailDivider} />

                <div className={styles.journalBody}>
                    {event.content || "Détails de l'événement à venir..."}
                </div>

                <div className={styles.backLinkContainer}>
                    <Link href="/bde" className={styles.backButton}>
                        ← Retour aux événements
                    </Link>
                </div>
            </article>
        </main>
    );
}
