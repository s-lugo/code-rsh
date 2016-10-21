import React from 'react';
import { Element } from 'react-scroll';
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

        <Element name="features">
            <section style={styles.infoSection}>
                <Features />
            </section>
        </Element>

        <hr style={styles.divider} />

        <Element name="languages">
            <section style={styles.infoSection}>
                <AvailableLanguages />
            </section>
        </Element>

        <section>
            <Footer />
        </section>
    </div>
);

export default Landing;



