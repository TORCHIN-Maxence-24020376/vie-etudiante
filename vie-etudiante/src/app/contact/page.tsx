import styles from '../inner.module.css';
import ContactForm from '@/components/ContactForm/ContactForm';

export default function Contact() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <h1 className={styles.title}>Contactez-nous</h1>
                <p className={styles.subtitle}>
                    Une question sur le département, le BDE ou le site web ? Envoyez-nous un message.
                </p>
            </section>

            <ContactForm />
        </main>
    );
}
