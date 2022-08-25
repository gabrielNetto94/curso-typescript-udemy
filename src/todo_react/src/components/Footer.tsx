import React from 'react';
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                <span>
                    Reactjs + TS todo @ {new Date().getFullYear()}
                </span>
            </p>
        </footer>
    );
}

export default Footer;
