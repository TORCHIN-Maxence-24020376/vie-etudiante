"use client";

import { useState, useMemo } from 'react';
import styles from '../inner.module.css';
import NewsFilter from '../../components/NewsFilter/NewsFilter';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import bdeData from '../../data/bde.json';

interface EventItem {
    id: number;
    title: string;
    date: string;
    isoDate: string;
    desc: string;
    category: string;
    price?: string;
}

const CATEGORIES = ["Soirée", "Voyage", "Sport", "Culture", "Autre"];

export default function BDE() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const filteredEvents = useMemo(() => {
        let items = [...bdeData];

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
                <h1 className={styles.title}>Évènements BDE</h1>
                <p className={styles.subtitle}>
                    Soirées, voyages, sport... Découvrez tout ce que le Bureau des Étudiants a prévu pour cette année !
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
                    {filteredEvents.map((item) => (
                        <ArticleCard
                            key={item.id}
                            title={item.title}
                            date={item.date}
                            category={item.category}
                            desc={item.desc}
                            slug={item.slug}
                            type="bde"
                            price={item.price}
                        />
                    ))}
                </div>

                {filteredEvents.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '4rem', color: '#888' }}>
                        Aucun événement prévu pour le moment dans cette catégorie.
                    </div>
                )}
            </section>
        </main>
    );
}
