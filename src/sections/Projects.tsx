import React from 'react';

const projects = [
    {
        title: "Android Smart Finance",
        description: "Personal finance app built with Kotlin/Jetpack Compose. Features real-time tracking and sleek UI.",
        tags: ["Kotlin", "Jetpack Compose", "Firebase"],
        link: "#"
    },
    {
        title: "Scaleable Backend Core",
        description: "Production-grade microservices architecture using Spring Boot and Postgres.",
        tags: ["Java", "Spring Boot", "Postgres", "AWS"],
        link: "#"
    },
    {
        title: "E-Commerce Mobile",
        description: "Cross-platform mobile experience with intensive focus on performance and accessibility.",
        tags: ["Android SDK", "MVVM", "Retrofit"],
        link: "#"
    }
];

const Projects: React.FC = () => {
    return (
        <section id="work" className="container" style={{ padding: 'var(--space-xl) 0' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-lg)', textAlign: 'left' }}>
                Selected <span className="text-gradient">Projects</span>
            </h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'var(--space-lg)'
            }}>
                {projects.map((project, index) => (
                    <div key={index} className="glass" style={{
                        padding: 'var(--space-lg)',
                        transition: 'transform 0.3s ease',
                        cursor: 'default'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <h3 style={{ marginBottom: 'var(--space-sm)' }}>{project.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)', fontSize: '0.9rem' }}>
                            {project.description}
                        </p>
                        <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap', marginBottom: 'var(--space-md)' }}>
                            {project.tags.map((tag, i) => (
                                <span key={i} style={{
                                    fontSize: '0.7rem',
                                    padding: '4px 10px',
                                    borderRadius: '20px',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a href={project.link} style={{
                            color: 'var(--accent-secondary)',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            fontWeight: '600'
                        }}>
                            Learn More &rarr;
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
