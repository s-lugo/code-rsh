import React from 'react';
import { Link } from 'react-router';
import { Header, Navigation, ListItemContent, IconButton, Menu, MenuItem } from 'react-mdl';

const NavBar = () => (
    <div >
        <Header title="CodeFast" scroll>
            <Navigation style={{textAlign:"left"}}>
                <Link to="practice">Practice</Link>
                <Link to="leaderboards">Leaderboards</Link>
            </Navigation>

            <Navigation>
                <div style={{position: 'relative'}}>
                    <ListItemContent avatar="person" />
                    <IconButton name="keyboard_arrow_down" id="user-menu" />
                    <Menu target="user-menu" align="right">
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </Menu>
                </div>
            </Navigation>
        </Header>
    </div>
);

export default NavBar;