"use client";

import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const [isStudent, setIsStudent] = useState(true);

    return (
        <div className={styles.container}>
            <div className={styles.switchContainer}>
                <button
                    type="button"
                    className={`${styles.switchBtn} ${isStudent ? styles.active : ''}`}
                    onClick={() => setIsStudent(true)}
                >
                    Étudiant
                </button>
                <button
                    type="button"
                    className={`${styles.switchBtn} ${!isStudent ? styles.active : ''}`}
                    onClick={() => setIsStudent(false)}
                >
                    Autre
                </button>
            </div>

            <form className={styles.formGroup} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Nom complet</label>
                    <input
                        type="text"
                        placeholder="Votre nom"
                        className={styles.input}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>
                        {isStudent ? 'Email étudiant' : 'Email de contact'}
                    </label>
                    <input
                        type="email"
                        placeholder={isStudent ? "prenom.nom@etu.univ-amu.fr" : "votre@email.com"}
                        className={styles.input}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Message</label>
                    <textarea
                        rows={5}
                        placeholder={isStudent ? "Une question sur les cours, le BDE..." : "Bonjour, je vous contacte pour..."}
                        className={styles.textarea}
                        required
                    />
                </div>

                <button type="submit" className={styles.submitBtn}>
                    Envoyer le message
                </button>
            </form>
        </div>
    );
}
