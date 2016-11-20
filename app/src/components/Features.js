
import React from 'react';
import {Grid, Cell } from 'react-mdl';

const styles = {
    p: {
        maxWidth: '300px',
        fontSize: '16px',
        margin: '0 auto',
        color: '#4D5966',
    },
    icon: {
        fontSize: '100px',
    },
    h3: {
        color: '#1D2228',
        fontWeight: '700',
    },
    column: {
        textAlign: 'center',
        padding: '15px',
    }
};

const Features = () => (
    <div style={{ width: '70%', margin: '0 auto', padding: '80px 0px' }}>
        <Grid>
            <Cell col={12}><h1 style={{textAlign:'center', margin: 0, padding: '20px'}}> Discover multiple tools that will aid you in your path </h1></Cell>
            <Cell col={6} style={styles.column}>
                <i className="material-icons" style={styles.icon}>people</i>
                <i className="material-icons" style={styles.icon}>laptop</i>
                <h3>Battle against your friends</h3>
                <p style={styles.p}>Test your coding speed in real-time battles against your friends and compare your best times with other coders worldwide.</p>
            </Cell>
            <Cell col={6} style={styles.column}>
                <i className="material-icons" style={styles.icon}>assessment</i>
                <i className="material-icons" style={styles.icon}>timeline</i>
                <h3>Track your progress</h3>
                <p style={styles.p}>Earn achievements, see where you have failed, track your stats, and check how much you have improved over time.</p>
            </Cell>
            <Cell col={6} style={styles.column}>
                <i className="material-icons" style={styles.icon}>assignment</i>
                <i className="material-icons" style={styles.icon}>feedback</i>
                <h3>Identify your weaknessess</h3>
                <p style={styles.p}>Get to know your most failed keys and symbols after each test, as well others stats that will help you become faster even quicker.</p>
            </Cell>
            <Cell col={6} style={styles.column}>
                <i className="material-icons" style={styles.icon}>grade</i>
                <h3>Compete in the leaderboards</h3>
                <p style={styles.p}>See how well you fare against other coders in our leaderboards for each of the different languages and courses.</p>
            </Cell>
        </Grid>
    </div>
);

export default Features;


