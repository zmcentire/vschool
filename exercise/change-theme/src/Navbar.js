import React from 'react';
import {withTheme} from './ThemeProvider';

const Navbar = () => {
    return (
        <div className="navbar">
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Contact</h3>
        </div>
    )
}

export default withTheme(Navbar)