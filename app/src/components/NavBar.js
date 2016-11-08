import React from 'react';
import { Link } from 'react-router';
import { Header, Navigation, ListItemContent, IconButton, Menu, MenuItem } from 'react-mdl';

let styles = {
    link: {
        textDecoration: 'none',
        color: 'black',
    }
}

const NavBar = (props) => {
    return <div >
        <Header title="CodeFast" scroll>
            <Navigation style={{textAlign:"left"}}>
                <Link to="practice">Practice</Link>
                <Link to="leaderboards">Leaderboards</Link>
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