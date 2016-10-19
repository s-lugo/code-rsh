import React from 'react';
import {Grid, Cell } from 'react-mdl';

const styles = {
    p: {
        maxWidth: "250px",
        fontSize: "16px",
    }
};

const Features = () => (
    <div style={{width: '50%', margin: '80px auto'}}>
        <Grid>
            <Cell col={12}>
                <h3>Battle against your friends</h3>
                <p style={styles.p}>Test your coding speed in real-time battles against your friends and compare your best times with other coders worldwide.</p>
            </Cell>
            <Cell col={12}>
                <h2>Track your progress</h2>
                <p style={styles.p}>Earn achievements, track your stats, and see how much you have improved over time. </p>
            </Cell>
            <Cell col={12}>
                <h2>Identify your weaknessess</h2>
                <p style={styles.p}>Get to know your most failed keys and symbols after each test, and others stats that will help you become faster even quicker.</p>
            </Cell>
            <Cell col={12}>
                <h2>Identify your weaknessess</h2>
                <p style={styles.p}>See how well you fare against other coders in our leaderboards.</p>
            </Cell>
        </Grid>
    </div>
);

export default Features;