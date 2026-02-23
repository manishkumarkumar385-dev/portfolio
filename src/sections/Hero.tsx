import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero-section container" style={{
            paddingTop: 'var(--space-xl)',
            paddingBottom: 'var(--space-xl)',
            textAlign: 'center',
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div className="animate-fade-in">
                <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: 'var(--space-md)' }}>
                    Hi, I'm <span className="text-gradient">Manish Kumar</span>
                </h1>
                <p style={{
                    fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                    color: 'var(--text-secondary)',
                    maxWidth: '800px',
                    margin: '0 auto var(--space-lg)'
                }}>
                    Android Engineer @ <span style={{ color: 'var(--text-primary)' }}>Jubilant Foodworks</span>.
                    Crafting high-performance mobile experiences for millions of users.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center' }}>
                    <button className="glass" style={{
                        padding: 'var(--space-sm) var(--space-lg)',
                        cursor: 'pointer',
                        color: 'var(--text-primary)',
                        fontSize: '1rem',
                        fontWeight: '600'
                    }}
                        onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        View My Work
                    </button>
                    <button style={{
                        padding: 'var(--space-sm) var(--space-lg)',
                        background: 'var(--accent-gradient)',
                        border: 'none',
                        borderRadius: '16px',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: '600'
                    }}
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Get In Touch
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
