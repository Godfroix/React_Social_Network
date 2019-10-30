import React from 'react';
import Headercss from './Header.module.css';

const Header = (props) => {
    return (
        <header className={Headercss.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png' />
        </header>
    )
}
export default Header;