import React from 'react';
import Navbarcss from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={Navbarcss.nav}>
            <div className={Navbarcss.item}>
                <NavLink to='/profile' activeClassName={Navbarcss.active} >Profile</NavLink>
            </div>
            <div className={Navbarcss.item}>
                <NavLink to='/dialogs' activeClassName={Navbarcss.active}>Dialogs</NavLink>
            </div>
            <div className={Navbarcss.item}>
                <NavLink to='/news' activeClassName={Navbarcss.active}>News</NavLink>
            </div>
            <div className={Navbarcss.item}>
                <NavLink to='/music' activeClassName={Navbarcss.active}>Music</NavLink>
            </div>
        </nav >
    )
}
export default Navbar;

{/* <div className={`${Navbarcss.item} ${Navbarcss.active}`}></div> */ }