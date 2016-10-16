import React from 'react';
import { Layout, Header, Navigation, Content, Button } from 'react-mdl';
import { Link } from 'react-router';
import backgroundImage from '../assets/img/landing-background.jpg';

const styles = {
    link:{
        fontWeight: 600,
        fontSize: '16px',
    },
    button:{
        marginTop: '2%',
        width:'200px',
        heigth:'200px',
        fontWeight:'1000',
    },
    h1:{
        color:'white',
    },
    p:{
        color:'white',
        fontSize:'24px',
    },
    hr:{
        backgroundColor: 'rgb(63,81,181)',
        height: '3px',
        width: '30%',
        margin: '25px auto',
        border: 0,
    }
}

const LandingBanner = () => (
    <div style={{height: '600px', position: 'relative'}}>
        <Layout style={{background: `url(${backgroundImage}) center / cover`}}>
            <Header transparent title="!" >
                <Navigation >
                    <Link to="#" style={styles.link}>Features</Link>
                    <Link to="#" style={styles.link}>Available Languages</Link>
                    <Link to="#" style={styles.link}>Log In</Link>
                    <Link to="#" style={styles.link}>Sign Up</Link>
                </Navigation>
            </Header>
            <Content style={{textAlign:'center', marginTop:'5%'}}>
                <h1 style={styles.h1}>CodeFast</h1>
                <hr style={styles.hr}/>
                <p style={styles.p}>Practice your coding speed and battle against your friends!</p>
                <Button raised primary ripple style={styles.button}>GET STARTED</Button>
            </Content>
        </Layout>
    </div>
);

export default LandingBanner;

