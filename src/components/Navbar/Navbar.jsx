import React from 'react';
import navbarCss from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={navbarCss.nav}>
            <div className={navbarCss.item}>
                <NavLink to='/profile' activeClassName={navbarCss.active} >Profile</NavLink>
            </div>
            <div className={navbarCss.item}>
                <NavLink to='/dialogs' activeClassName={navbarCss.active}>Dialogs</NavLink>
            </div>
            <div className={navbarCss.item}>
                <NavLink to='/news' activeClassName={navbarCss.active}>News</NavLink>
            </div>
            <div className={navbarCss.item}>
                <NavLink to='/music' activeClassName={navbarCss.active}>Music</NavLink>
            </div>
        </nav >
    )
}
export default Navbar;

{/* <div className={`${Navbarcss.item} ${navbarCss.active}`}></div> */ }