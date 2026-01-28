"use client";

import styles from './NewsFilter.module.css';

interface NewsFilterProps {
    categories: string[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
    sortOrder: 'asc' | 'desc';
    onSortChange: (order: 'asc' | 'desc') => void;
    priceFilter?: 'all' | 'free' | 'paid';
    onPriceFilterChange?: (filter: 'all' | 'free' | 'paid') => void;
}

export default function NewsFilter({
    categories,
    activeCategory,
    onCategoryChange,
    sortOrder,
    onSortChange,
    priceFilter = 'all',
    onPriceFilterChange
}: NewsFilterProps) {
    return (
        <div className={styles.filterContainer}>
            <div className={styles.categories}>
                <button
                    className={`${styles.categoryButton} ${activeCategory === 'All' ? styles.active : ''}`}
                    onClick={() => onCategoryChange('All')}
                >
                    Tout voir
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`${styles.categoryButton} ${activeCategory === cat ? styles.active : ''}`}
                        onClick={() => onCategoryChange(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className={styles.sortContainer}>
                {onPriceFilterChange && (
                    <div className={styles.filterGroup}>
                        <span className={styles.sortLabel}>Prix :</span>
                        <div className={styles.selectWrapper}>
                            <select
                                value={priceFilter}
                                onChange={(e) => onPriceFilterChange(e.target.value as 'all' | 'free' | 'paid')}
                                className={styles.sortSelect}
                            >
                                <option value="all">Tous les prix</option>
                                <option value="free">Gratuit</option>
                                <option value="paid">Payant</option>
                            </select>
                        </div>
                    </div>
                )}

                <div className={styles.filterGroup}>
                    <span className={styles.sortLabel}>Trier par :</span>
                    <div className={styles.selectWrapper}>
                        <select
                            value={sortOrder}
                            onChange={(e) => onSortChange(e.target.value as 'asc' | 'desc')}
                            className={styles.sortSelect}
                        >
                            <option value="desc">Plus récent</option>
                            <option value="asc">Plus ancien</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
