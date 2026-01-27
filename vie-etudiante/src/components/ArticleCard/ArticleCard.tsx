import Link from 'next/link';
import styles from './ArticleCard.module.css';
import { useRef, MouseEvent } from 'react';

interface ArticleCardProps {
    title: string;
    date: string;
    category: string;
    desc: string;
    slug: string;
    type?: 'actualites' | 'bde';
    price?: string;
}

export default function ArticleCard({ title, date, category, desc, slug, type = 'actualites', price }: ArticleCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        cardRef.current.style.setProperty('--mouse-x', `${x}px`);
        cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    const baseUrl = type === 'bde' ? '/bde' : '/actualites';

    return (
        <article
            ref={cardRef}
            className={styles.card}
            onMouseMove={handleMouseMove}
        >
            <div className={styles.header}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span className={styles.category}>{category}</span>
                    {price && <span className={styles.priceBadge}>{price}</span>}
                </div>
                <time className={styles.date}>{date}</time>
            </div>

            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{desc}</p>
            </div>

            <div className={styles.footer}>
                <Link href={`${baseUrl}/${slug}`} className={styles.linkStart}>
                    Lire l'article
                    <span className={styles.arrow}>→</span>
                </Link>
            </div>
        </article>
    );
}
