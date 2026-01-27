import styles from '../inner.module.css';

export default function Contact() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <h1 className={styles.title}>Contactez-nous</h1>
                <p className={styles.subtitle}>
                    Une question sur le département, le BDE ou le site web ? Envoyez-nous un message.
                </p>
            </section>

            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 2rem' }}>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontWeight: '600', color: '#333' }}>Nom complet</label>
                        <input
                            type="text"
                            placeholder="Votre nom"
                            style={{
                                padding: '1rem',
                                borderRadius: '12px',
                                border: '1px solid rgba(0,0,0,0.1)',
                                background: '#fafafa',
                                fontSize: '1rem'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontWeight: '600', color: '#333' }}>Email étudiant</label>
                        <input
                            type="email"
                            placeholder="prenom.nom@etu.univ-amu.fr"
                            style={{
                                padding: '1rem',
                                borderRadius: '12px',
                                border: '1px solid rgba(0,0,0,0.1)',
                                background: '#fafafa',
                                fontSize: '1rem'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontWeight: '600', color: '#333' }}>Message</label>
                        <textarea
                            rows={5}
                            placeholder="Votre message..."
                            style={{
                                padding: '1rem',
                                borderRadius: '12px',
                                border: '1px solid rgba(0,0,0,0.1)',
                                background: '#fafafa',
                                fontSize: '1rem',
                                fontFamily: 'inherit'
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            padding: '1rem 2rem',
                            borderRadius: '99px',
                            background: '#111',
                            color: 'white',
                            border: 'none',
                            fontWeight: '700',
                            cursor: 'pointer',
                            alignSelf: 'flex-start',
                            marginTop: '1rem'
                        }}
                    >
                        Envoyer le message
                    </button>
                </form>
            </div>
        </main>
    );
}
