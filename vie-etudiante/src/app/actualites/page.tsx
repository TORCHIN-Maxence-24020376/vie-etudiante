"use client";

import { useState, useMemo } from 'react';
import styles from '../inner.module.css';
import NewsFilter from '../../components/NewsFilter/NewsFilter';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import contentData from '../../data/content.json';

interface NewsItem {
    id: number;
    title: string;
    date: string;
    isoDate: string;
    desc: string;
    category: string;
}

const CATEGORIES = ["Pédagogie", "Vie Étudiante", "Événement", "Partenariat", "International"];

export default function Actualites() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

    const filteredNews = useMemo(() => {
        let items = [...contentData.news];

        if (activeCategory !== 'All') {
            items = items.filter(item => item.category === activeCategory);
        }

        items.sort((a, b) => {
            const dateA = new Date(a.isoDate).getTime();
            const dateB = new Date(b.isoDate).getTime();
            return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        });

        return items;
    }, [activeCategory, sortOrder]);

    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <h1 className={styles.title}>Actualités du Département</h1>
                <p className={styles.subtitle}>
                    Restez connectés avec la vie du BUT Informatique : événements, pédagogie et vie étudiante.
                </p>
            </section>

            <section className={styles.section}>
                <NewsFilter
                    categories={CATEGORIES}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                    sortOrder={sortOrder}
                    onSortChange={setSortOrder}
                />

                <div className={styles.grid}>
                    {filteredNews.map((item) => (
                        <ArticleCard
                            key={item.id}
                            title={item.title}
                            date={item.date}
                            category={item.category}
                            desc={item.desc}
                            slug={item.slug}
                        />
                    ))}
                </div>

                {filteredNews.length === 0 && (
                    <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '2rem', color: '#888' }}>
                        Aucune actualité trouvée dans cette catégorie.
                    </div>
                )}
            </section>
        </main>
    );
}
