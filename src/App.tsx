import './styles/index.css';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';

function App() {
  return (
    <div className="App">
      <header style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: 'var(--space-md) 0',
        zIndex: 100
      }}>
        <nav className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'Outfit' }}>
            PORT<span className="text-gradient">FOLIO</span>
          </div>
          <div className="glass" style={{ padding: 'var(--space-xs) var(--space-sm)', borderRadius: '30px' }}>
            <ul style={{ display: 'flex', gap: 'var(--space-md)', listStyle: 'none', margin: 0, padding: 0 }}>
              <li><a href="#work" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Work</a></li>
              <li><a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>About</a></li>
              <li><a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
      </main>

      <footer className="container" style={{
        padding: 'var(--space-lg) 0',
        textAlign: 'center',
        borderTop: '1px solid var(--glass-border)',
        marginTop: 'var(--space-xl)',
        color: 'var(--text-secondary)',
        fontSize: '0.8rem'
      }}>
        <p>&copy; {new Date().getFullYear()} Personal Portfolio. Built with React + Vite.</p>
      </footer>
    </div>
  );
}

export default App;
