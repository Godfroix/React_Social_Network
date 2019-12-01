import React from 'react';
import headerCss from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={headerCss.header}>
            <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' />
            <div className={headerCss.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to='/login'>Login</NavLink>
                }
                {/* <NavLink to='/login'>Login</NavLink> */}
            </div>
        </header>
    )
}
export default Header;