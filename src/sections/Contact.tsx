import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Placeholder for actual AWS Lambda/API Gateway integration
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Reset status after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: 'var(--space-sm) var(--space-md)',
        marginBottom: 'var(--space-md)',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid var(--glass-border)',
        borderRadius: '12px',
        color: 'var(--text-primary)',
        fontFamily: 'inherit',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.3s ease'
    };

    return (
        <section id="contact" className="container" style={{ padding: 'var(--space-xl) 0' }}>
            <div className="glass" style={{ padding: 'var(--space-lg)', borderRadius: '24px', maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-md)', textAlign: 'center' }}>
                    Get In <span className="text-gradient">Touch</span>
                </h2>
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
                    Have a question or want to work together? Drop me a message below.
                </p>

                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-md)' }}>
                        <div>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: 'var(--space-xs)', fontSize: '0.9rem' }}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: 'var(--space-xs)', fontSize: '0.9rem' }}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div style={{ marginTop: 'var(--space-md)' }}>
                        <label htmlFor="subject" style={{ display: 'block', marginBottom: 'var(--space-xs)', fontSize: '0.9rem' }}>Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            style={inputStyle}
                            placeholder="Project Inquiry"
                        />
                    </div>

                    <div style={{ marginTop: 'var(--space-md)' }}>
                        <label htmlFor="message" style={{ display: 'block', marginBottom: 'var(--space-xs)', fontSize: '0.9rem' }}>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            style={{ ...inputStyle, resize: 'vertical' }}
                            placeholder="Hello Manish, I'd like to talk about..."
                        />
                    </div>

                    <div style={{ textAlign: 'center', marginTop: 'var(--space-lg)' }}>
                        <button
                            type="submit"
                            disabled={status === 'sending' || status === 'success'}
                            style={{
                                padding: 'var(--space-sm) var(--space-xl)',
                                background: status === 'success' ? '#4caf50' : 'var(--accent-gradient)',
                                border: 'none',
                                borderRadius: '16px',
                                color: 'white',
                                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                                fontSize: '1rem',
                                fontWeight: '600',
                                transition: 'all 0.3s ease',
                                opacity: status === 'sending' ? 0.7 : 1
                            }}
                        >
                            {status === 'idle' && 'Send Message'}
                            {status === 'sending' && 'Sending...'}
                            {status === 'success' && 'Message Sent!'}
                            {status === 'error' && 'Failed to Send'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
