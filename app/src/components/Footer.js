import React from 'react';
import { Footer, FooterSection } from 'react-mdl';

let styles = {
    footer:{
        position: 'absolute',
        bottom: '0px',
        left: '0px',
        width: '100%',
        paddingLeft: 0,
        paddingRight: 0,
    },
}

export default () => (
    <Footer style={styles.footer} size="mini">
        <FooterSection type="left" logo="© 2016 Sebastian Lugo.">
        </FooterSection>
    </Footer>
);
