import React from 'react';
import LandingBanner from '../components/LandingBanner.js';
import Features from '../components/Features.js';
import AvailableLanguages from '../containers/AvailableLanguages.js';
import Footer from '../components/Footer.js';

const styles = {
    infoSection: {
        backgroundColor: '#F0F2F3',
    },
    divider: {
        backgroundColor: '#9E9E9E',
        margin: 0,
        border: 0,
    }
}

const Landing = () => (
    <div>
        <section>
            <LandingBanner />
        </section>

        <section style={styles.infoSection}>
            <Features />
        </section>

        <hr style={styles.divider} />

        <section style={styles.infoSection}>
            <AvailableLanguages />
        </section>

        <section>
            <Footer />
        </section>
    </div>
);

export default Landing;



