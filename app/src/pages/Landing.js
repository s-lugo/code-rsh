import React from 'react';
import { Element } from 'react-scroll';
import LandingBanner from '../components/LandingBanner.js';
import Features from '../components/Features.js';
import LanguagesPreview from '../components/LanguagesPreview.js';
import Footer from '../components/Footer.js';

const styles = {
    infoSectionOne: {
        backgroundColor: 'white',
    },
    infoSectionTwo: {
        backgroundColor: '#F0F2F3',
    },
}

const Landing = () => (
    <div>
        <section>
            <LandingBanner />
        </section>

        <Element name="features">
            <section style={styles.infoSectionOne}>
                <Features />
            </section>
        </Element>

        <Element name="languages">
            <section style={styles.infoSectionTwo}>
                <LanguagesPreview />
            </section>
        </Element>

        <section>
            <Footer />
        </section>
    </div>
);

export default Landing;



