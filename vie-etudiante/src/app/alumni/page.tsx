"use client";

import { useState, useMemo } from 'react';
import styles from '../inner.module.css';
import NewsFilter from '../../components/NewsFilter/NewsFilter';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import alumniData from '../../data/alumni.json';

const CATEGORIES = ["Témoignage", "Événement", "Carrière", "Réseau", "Annuaire"];

export default function Alumni() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

    const filteredItems = useMemo(() => {
        let items = [...alumniData];

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
                <h1 className={styles.title}>Réseau Alumni</h1>
                <p className={styles.subtitle}>
                    Gardez le lien avec les anciens de l'IUT d'Aix et développez votre réseau professionnel.
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
                            type="alumni"
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
