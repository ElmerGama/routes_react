import React from 'react';

const Home = () => {
    return (
        <main style={styles.main}>
            <h1 style={styles.heading}>Bienvenido a la Programación en React</h1>
            <p style={styles.paragraph}>
                React es una biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas y eficientes. Facilita la creación de componentes reutilizables que gestionan su propio estado, lo que permite desarrollar aplicaciones web modernas de manera más sencilla.
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

export default Home;
