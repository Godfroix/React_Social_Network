import React from 'react';
import headerCss from './Header.module.css';

const Header = (props) => {
    return (
        <header className={headerCss.header}>
            <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' />
        </header>
    )
}
export default Header;