import Link from 'next/link';
import styles from './ArticleDetail.module.css';

interface ArticleDetailProps {
    category: string;
    title: string;
    date: string;
    readTime?: string;
    subtitle?: string;
    description: string;
    content: string;
    backLink: string;
    backText: string;
    price?: string;
    registerLink?: string;
}

export default function ArticleDetail({
    category,
    title,
    date,
    readTime,
    subtitle,
    description,
    content,
    backLink,
    backText,
    price,
    registerLink
}: ArticleDetailProps) {
    return (
        <main className={styles.main}>
            <article className={styles.articleContainer}>
                <header className={styles.header}>
                    <span className={styles.category}>{category}</span>
                    <h1 className={styles.title}>{title}</h1>
                    <div className={styles.meta}>
                        <time>{date}</time>
                        {(readTime || subtitle) && <span>•</span>}
                        {readTime && <span>{readTime}</span>}
                        {subtitle && <span>{subtitle}</span>}
                    </div>
                </header>

                <div className={styles.content}>
                    {(price || registerLink) && (
                        <div className={styles.eventMetaBox}>
                            {price && <span className={styles.priceTag}>{price}</span>}
                            {registerLink && (
                                <a href={registerLink} className={styles.cardLink}>
                                    S'inscrire Maintenant →
                                </a>
                            )}
                        </div>
                    )}

                    <p className={styles.lead}>
                        {description}
                    </p>

                    <div className={styles.body}>
                        {content || "Contenu détaillé à venir..."}
                    </div>
                </div>

                <div className={styles.footer}>
                    <Link href={backLink} className={styles.backButton}>
                        {backText}
                    </Link>
                </div>
            </article>
        </main>
    );
}
