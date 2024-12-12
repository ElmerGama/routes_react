import React from 'react';

const About = () => {
    return (
        <main style={styles.main}>
            <h1 style={styles.heading}>Acerca de Nosotros</h1>
            <p style={styles.paragraph}>
                Somos una comunidad dedicada a compartir conocimientos y recursos sobre el desarrollo con React. Nuestro objetivo es ayudar a desarrolladores de todos los niveles a mejorar sus habilidades y crear aplicaciones web de alta calidad.
            </p>
        </main>
    );
};

const styles = {
    main: {
        padding: '2rem',
        textAlign: 'center',
    },
    heading: {
        fontSize: '2.5rem',
        color: '#333',
    },
    paragraph: {
        fontSize: '1.2rem',
        color: '#666',
        lineHeight: '1.6',
    },
};

export default About;
