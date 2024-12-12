import React from 'react';

const Contact = () => {
    return (
        <main style={styles.main}>
            <h1 style={styles.heading}>Contáctanos</h1>
            <p style={styles.paragraph}>
                Si tienes alguna pregunta o deseas colaborar con nosotros, no dudes en enviarnos un mensaje a contacto@reactcommunity.com.
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

export default Contact;
