"use client";

import { useState, useEffect } from 'react';
import styles from './AdminDashboard.module.css';

type ContentType = 'actualites' | 'bde' | 'etudes' | 'alumni';

interface Article {
    id: number;
    title: string;
    slug: string;
    date: string;
    isoDate: string;
    desc: string;
    category: string;
    content: string;
    price?: string; // Optional for BDE
    isVerified?: boolean;
}

interface ContentData {
    categories: string[];
    items: Article[];
}

export default function AdminPage() {
    const [selectedType, setSelectedType] = useState<ContentType>('actualites');
    const [data, setData] = useState<ContentData | null>(null);
    const [editingArticle, setEditingArticle] = useState<Article | null>(null);
    const [isCreating, setIsCreating] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Security state
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    // Fetch data when type changes
    useEffect(() => {
        if (isAuthenticated) {
            fetchData(selectedType);
        }
    }, [selectedType, isAuthenticated]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // A simple "vite fait" password check as requested
        if (password === 'cyriltamine') {
            setIsAuthenticated(true);
            setError(false);
        } else {
            setError(true);
        }
    };

    const fetchData = async (type: ContentType) => {
        setIsLoading(true);
        try {
            const res = await fetch(`/api/admin/content?type=${type}`);
            const json = await res.json();
            setData(json);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className={styles.passwordGate}>
                <div className={styles.passwordCard}>
                    <div className={styles.passwordIcon}>🔐</div>
                    <h1 className={styles.passwordTitle}>Espace Admin</h1>
                    <p className={styles.passwordDesc}>Veuillez saisir le code pour accéder au dashboard.</p>
                    
                    <form onSubmit={handleLogin} className={styles.passwordForm}>
                        <div className={styles.formGroup}>
                            <input
                                type="password"
                                className={styles.input}
                                placeholder="Mot de passe"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoFocus
                            />
                        </div>
                        {error && <p className={styles.errorMsg}>Code incorrect. Réessayez.</p>}
                        <button type="submit" className={styles.saveBtn}>
                            Se connecter
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    const handleSave = async (updatedData: ContentData) => {
        try {
            const res = await fetch('/api/admin/content', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: selectedType, data: updatedData }),
            });
            if (res.ok) {
                setData(updatedData);
                setEditingArticle(null);
                setIsCreating(false);
            }
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    const handleDelete = (id: number) => {
        if (!data || !confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) return;
        const newData = {
            ...data,
            items: data.items.filter(item => item.id !== id)
        };
        handleSave(newData);
    };

    const handleArticleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!data) return;

        const formData = new FormData(e.currentTarget);
        const articleData: Partial<Article> = {
            title: formData.get('title') as string,
            slug: (formData.get('title') as string).toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
            date: formData.get('date') as string,
            isoDate: new Date().toISOString().split('T')[0],
            desc: formData.get('desc') as string,
            category: formData.get('category') as string,
            content: formData.get('content') as string,
            isVerified: formData.get('isVerified') === 'on',
        };

        if (selectedType === 'bde') {
            articleData.price = formData.get('price') as string;
        }

        let newItems;
        if (isCreating) {
            const newId = data.items.length > 0 ? Math.max(...data.items.map(i => i.id)) + 1 : 1;
            newItems = [...data.items, { ...articleData, id: newId } as Article];
        } else {
            newItems = data.items.map(item =>
                item.id === editingArticle?.id ? { ...item, ...articleData } : item
            );
        }

        handleSave({ ...data, items: newItems });
    };

    const handleAddCategory = () => {
        const cat = prompt('Nouvelle catégorie :');
        if (cat && data && !data.categories.includes(cat)) {
            handleSave({ ...data, categories: [...data.categories, cat] });
        }
    };

    const handleRemoveCategory = (cat: string) => {
        if (!data) return;
        handleSave({
            ...data,
            categories: data.categories.filter(c => c !== cat)
        });
    };

    return (
        <div className={styles.adminContainer}>
            <aside className={styles.sidebar}>
                <h1 className={styles.sidebarTitle}>Vie Étudiante Admin</h1>
                <nav>
                    {(['actualites', 'bde', 'etudes', 'alumni'] as ContentType[]).map(type => (
                        <div
                            key={type}
                            className={`${styles.navItem} ${selectedType === type ? styles.activeNavItem : ''}`}
                            onClick={() => setSelectedType(type)}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </div>
                    ))}
                </nav>
            </aside>

            <main className={styles.mainContent}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Gestion des {selectedType}</h2>
                    <button className={styles.addButton} onClick={() => { setIsCreating(true); setEditingArticle(null); }}>
                        <span>+</span> Ajouter un article
                    </button>
                </div>

                {isLoading ? <p>Chargement...</p> : (
                    <div className={styles.articleList}>
                        {data?.items.map(article => (
                            <div key={article.id} className={styles.card}>
                                <div className={styles.articleInfo}>
                                    <div className={styles.titleWrapper}>
                                        <h4>{article.title}</h4>
                                        {article.isVerified && (
                                            <span className={styles.verifiedBadge} title="Vérifié par un rédacteur">✅</span>
                                        )}
                                    </div>
                                    <div className={styles.articleMeta}>
                                        <span>📅 {article.date}</span>
                                        <span>🏷️ {article.category}</span>
                                    </div>
                                </div>
                                <div className={styles.actions}>
                                    <button className={styles.editBtn} onClick={() => { setEditingArticle(article); setIsCreating(false); }}>Modifier</button>
                                    <button className={styles.deleteBtn} onClick={() => handleDelete(article.id)}>Supprimer</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <section className={styles.categoriesSection}>
                    <h3>Gérer les Catégories</h3>
                    <div className={styles.tagContainer}>
                        {data?.categories.map(cat => (
                            <span key={cat} className={styles.tag}>
                                {cat}
                                <span className={styles.removeTag} onClick={() => handleRemoveCategory(cat)}>×</span>
                            </span>
                        ))}
                        <button onClick={handleAddCategory} className={styles.tag} style={{ borderStyle: 'dashed', cursor: 'pointer' }}>
                            + Ajouter
                        </button>
                    </div>
                </section>
            </main>

            {(editingArticle || isCreating) && (
                <div className={styles.editorOverlay}>
                    <div className={styles.editorModal}>
                        <button
                            className={styles.closeModal}
                            onClick={() => { setEditingArticle(null); setIsCreating(false); }}
                            title="Fermer"
                        >
                            ×
                        </button>
                        <h3>{isCreating ? 'Nouvel Article' : 'Modifier Article'}</h3>
                        <form onSubmit={handleArticleSubmit}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Titre</label>
                                <input name="title" className={styles.input} defaultValue={editingArticle?.title} required />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Catégorie</label>
                                <select name="category" className={styles.select} defaultValue={editingArticle?.category}>
                                    {data?.categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Date d'affichage</label>
                                <input name="date" className={styles.input} defaultValue={editingArticle?.date} placeholder="Ex: 12 Février 2026" required />
                            </div>
                            {selectedType === 'bde' && (
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Prix</label>
                                    <input name="price" className={styles.input} defaultValue={editingArticle?.price} placeholder="Ex: 5€ / Gratuit" />
                                </div>
                            )}
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Description courte</label>
                                <textarea name="desc" className={styles.textarea} defaultValue={editingArticle?.desc} rows={3} required />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Contenu complet (Markdown supporté)</label>
                                <textarea name="content" className={styles.textarea} defaultValue={editingArticle?.content} rows={8} required />
                            </div>
                            <div className={styles.modalFooter}>
                                <div className={styles.toggleGroup}>
                                    <label className={styles.switch}>
                                        <input
                                            type="checkbox"
                                            name="isVerified"
                                            defaultChecked={editingArticle?.isVerified}
                                        />
                                        <span className={styles.slider}></span>
                                    </label>
                                    <span className={styles.toggleLabel}>Vérifié</span>
                                </div>
                                <button type="button" className={styles.cancelBtn} onClick={() => { setEditingArticle(null); setIsCreating(false); }}>Annuler</button>
                                <button type="submit" className={styles.saveBtn}>Enregistrer</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
