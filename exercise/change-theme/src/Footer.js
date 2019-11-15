import React from 'react';
import {withTheme} from './ThemeProvider';

const Footer = () => {
    return (
        <div className='footer'>
            <h3>Footer</h3>
        </div>
    )
}

export default withTheme(Footer)