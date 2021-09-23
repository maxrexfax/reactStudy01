import React from 'react';
import cl from './Header.module.css'
import logo from './../../img/header_logo.png';

const Header = () => {
    return <header className={cl.header}>
        <img src={logo}/>        
    </header>

}

export default Header;