import React from 'react';
import { Link } from 'react-router';
import { Header, Navigation, ListItemContent, IconButton, Menu, MenuItem } from 'react-mdl';
import Logo from '../assets/img/logo_test.png';

let styles = {
    link: {
        textDecoration: 'none',
        color: 'black',
    }
}

const NavBar = (props) => {
    return <div >
        <Header title={<Link to="/practice"><img src={Logo} style={{height:"40px"}}/></Link>} scroll>
            <Navigation>
                <Link to="practice">PRACTICE</Link>
                <Link to="leaderboards">LEADERBOARDS</Link>
            </Navigation>

            <Navigation>
                <IconButton name="notifications" />
                <div style={{position: 'relative'}}>
                    <ListItemContent avatar="person" />
                    <IconButton name="keyboard_arrow_down" id="user-menu" />
                    <Menu target="user-menu" align="right">
                        <MenuItem><Link to="profile" style={styles.link}>Profile</Link></MenuItem>
                        <MenuItem><Link to="logout" style={styles.link}>Logout</Link></MenuItem>
                    </Menu>
                </div>
            </Navigation>
        </Header>
    </div>
};

export default NavBar;