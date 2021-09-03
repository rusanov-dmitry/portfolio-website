import React from 'react';
import styles from './Header.module.css';
import logo from '../../logo.svg';

const Header = () => {
    return (
        <div className={styles.container}>
            <img src={logo} alt="Logo"/>
        </div>
    );
}

export default Header;