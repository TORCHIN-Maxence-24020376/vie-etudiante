"use client";

import { useState, useMemo } from 'react';
import styles from '../inner.module.css';
import NewsFilter from '../../components/NewsFilter/NewsFilter';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import etudesData from '../../data/etudes.json';

const CATEGORIES = ["Tutorat", "Licences", "Examens", "Ressources"];

export default function Etudes() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

    const filteredItems = useMemo(() => {
        let items = [...etudesData];

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
                <h1 className={styles.title}>Études & Ressources</h1>
                <p className={styles.subtitle}>
                    Tout pour réussir votre BUT Informatique : tutorat, fiches de révisions et outils.
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
                    {filteredItems.map((item) => (
                        <ArticleCard
                            key={item.id}
                            title={item.title}
                            date={item.date}
                            category={item.category}
                            desc={item.desc}
                            slug={item.slug}
                            type="etudes"
                        />
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '2rem', color: '#888' }}>
                        Aucun contenu trouvé dans cette catégorie.
                    </div>
                )}
            </section>
        </main>
    );
}
