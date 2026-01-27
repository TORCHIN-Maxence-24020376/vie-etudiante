import Link from 'next/link';
import styles from './ArticleDetail.module.css';
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
            <article className={styles.articleContainer}>
                <header className={styles.header}>
                    <span className={styles.category}>{article.category}</span>
                    <h1 className={styles.title}>{article.title}</h1>
                    <div className={styles.meta}>
                        <time>{article.date}</time>
                        <span>•</span>
                        <span>3 min de lecture</span>
                    </div>
                </header>

                <div className={styles.content}>
                    <p className={styles.lead}>
                        {article.desc}
                    </p>

                    <div className={styles.body}>
                        {article.content || "Contenu détaillé à venir..."}
                    </div>
                </div>

                <div className={styles.footer}>
                    <Link href="/actualites" className={styles.backButton}>
                        ← Retour aux actualités
                    </Link>
                </div>
            </article>
        </main>
    );
}
