import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
    return (
        <Router>
            <nav style={styles.nav}>
                <ul style={styles.ul}>
                    <li style={styles.li}>
                        <Link to="/" style={styles.link}>Inicio</Link>
                    </li>
                    <li style={styles.li}>
                        <Link to="/about" style={styles.link}>Acerca de</Link>
                    </li>
                    <li style={styles.li}>
                        <Link to="/contact" style={styles.link}>Contacto</Link>
                    </li>
                </ul>
            </nav>
            <div style={styles.container}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

const styles = {
    nav: {
        backgroundColor: '#282c34',
        padding: '1rem',
    },
    ul: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
    },
    li: {
        margin: '0 1rem',
    },
    link: {
        color: '#61dafb',
        textDecoration: 'none',
        fontSize: '1.2rem',
    },
    container: {
        padding: '2rem',
    },
};

export default App;
