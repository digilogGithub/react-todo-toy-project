import React from 'react';
import styles from './Header.module.css';
import {HiMoon, HiSun} from "react-icons/hi";
import {useDarkMode} from "../../context/DarkModeContext";

function Header({filters, filter, onChanged}) {
    const {darkMode, toggleDarkMode} = useDarkMode();
    return (
        <header className={styles.header}>
            <button className={styles.toggle} onClick={toggleDarkMode}>
                {!darkMode && <HiMoon/>}
                {darkMode && <HiSun/>}
            </button>
            <ul className={styles.filters}>
                {filters.map(value => <li key={value}>
                    <button className={`${styles.filter} ${filter === value && styles.selected}`}
                            onClick={() => onChanged(value)}>{value}</button>
                </li>)}
            </ul>
        </header>
    );
}

export default Header;