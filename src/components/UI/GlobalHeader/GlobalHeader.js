import React from 'react';
import styles from './GlobalHeader.module.css';

const GlobalHeader = props => {
    return(
        <div className={`${styles['header-image']} ${styles['header-image--'+props.image]}`}></div>
    );
}

export default GlobalHeader;