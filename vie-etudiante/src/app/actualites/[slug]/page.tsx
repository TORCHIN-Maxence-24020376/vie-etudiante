import Link from 'next/link';
import styles from '../../inner.module.css';
import contentData from '../../../data/content.json';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return contentData.news.map((item) => ({
        slug: item.slug,
    }));
}

export default async function NewsArticle({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = contentData.news.find((item) => item.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <main className={styles.main}>
            {/* Editorial Header */}
            <section className={styles.hero} style={{ paddingBottom: '2rem' }}>
                <div className={styles.detailHeader}>
                    <span className={styles.categoryBadge}>{article.category}</span>
                </div>
                <h1 className={styles.title}>{article.title}</h1>
                <div className={styles.detailMetaGroup}>
                    <span className={styles.detailDate}>{article.date}</span>
                    <span>•</span>
                    <span>3 min de lecture</span>
                </div>
            </section>

            {/* Article Content */}
            <article className={styles.articleContainer}>
                <p className={styles.journalLead}>
                    {article.desc}
                </p>

                <hr className={styles.detailDivider} />

                <div className={styles.journalBody}>
                    {article.content || "Contenu détaillé à venir..."}
                </div>

                <div className={styles.backLinkContainer}>
                    <Link href="/actualites" className={styles.backButton}>
                        ← Retour aux actualités
                    </Link>
                </div>
            </article>
        </main>
    );
}
