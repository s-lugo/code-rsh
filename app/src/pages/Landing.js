import React from 'react';
import LandingBanner from '../components/LandingBanner.js';
import Features from '../components/Features.js';
import AvailableLanguages from '../components/AvailableLanguages.js';
import Footer from '../components/Footer.js';

const Landing = () => (
    <div>
        <section>
            <LandingBanner />
        </section>

        <section>
            <Features />
        </section>

        <hr/>

        <section>
            <AvailableLanguages />
        </section>

        <section>
            <Footer />
        </section>
    </div>
);

export default Landing;
