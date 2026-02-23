import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="container" style={{ padding: 'var(--space-xl) 0' }}>
            <div className="glass" style={{ padding: 'var(--space-lg)', borderRadius: '24px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>
                    About <span className="text-gradient">Me</span>
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'var(--space-xl)', alignItems: 'start' }}>
                    {/* Column 1: Summary/Focus */}
                    <div>
                        <h3 style={{ marginBottom: 'var(--space-sm)', color: 'var(--accent-secondary)' }}>Focus Areas</h3>
                        <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)' }}>
                            <li style={{ marginBottom: 'var(--space-xs)' }}>⚡ Scalable Android Architecture</li>
                            <li style={{ marginBottom: 'var(--space-xs)' }}>🛡️ Performance Optimization</li>
                            <li style={{ marginBottom: 'var(--space-xs)' }}>🌟 Data-driven UX (Amplitude/AB Tests)</li>
                        </ul>

                        <div style={{ marginTop: 'var(--space-lg)' }}>
                            <a
                                href="/Manish_Kumar_CV.pdf"
                                className="glass"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 'var(--space-sm)',
                                    padding: 'var(--space-sm) var(--space-md)',
                                    textDecoration: 'none',
                                    color: 'var(--text-primary)',
                                    fontWeight: '600',
                                    border: '1px solid var(--accent-primary)'
                                }}
                                download="Manish_Kumar_CV.pdf"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                Download Resume
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Detailed Outline */}
                    <div style={{ color: 'var(--text-secondary)' }}>
                        <p style={{ marginBottom: 'var(--space-md)', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                            Professional Journey
                        </p>
                        <div style={{ borderLeft: '2px solid var(--glass-border)', paddingLeft: 'var(--space-md)' }}>
                            <div style={{ marginBottom: 'var(--space-md)' }}>
                                <h4 style={{ color: 'var(--text-primary)' }}>Experience</h4>
                                <div style={{ marginBottom: 'var(--space-sm)' }}>
                                    <p style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Jubilant Foodworks Ltd. | Android Engineer</p>
                                    <p style={{ fontSize: '0.9rem' }}>July 2023 – Present</p>
                                    <ul style={{ fontSize: '0.9rem', paddingLeft: 'var(--space-md)' }}>
                                        <li>Optimizing Domino's India app for millions of users.</li>
                                        <li>Winner of JFL Chair Persons Award 2024 for OLO cost optimization.</li>
                                        <li>Implementing dynamic components, API caching, and AB testing.</li>
                                    </ul>
                                </div>
                            </div>
                            <div style={{ marginBottom: 'var(--space-md)' }}>
                                <h4 style={{ color: 'var(--text-primary)' }}>Education</h4>
                                <p style={{ fontWeight: '600', color: 'var(--text-primary)' }}>NIT Jamshedpur</p>
                                <p style={{ fontSize: '0.9rem' }}>B.Tech in ECE | CGPA: 8.45</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--text-primary)' }}>Key Skills</h4>
                                <p>Kotlin, Coroutines, Dagger, MVVM, Gitlab, Amplitude, Figma</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
