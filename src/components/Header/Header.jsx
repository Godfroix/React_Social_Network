import React from 'react';
import headerCss from './Header.module.css';

const Header = (props) => {
    return (
        <header className={headerCss.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png' />
        </header>
    )
}
export default Header;