import React from 'react';
import styles from './GithubButton.module.css';
import githubIcon from '../../assets/github-icon.svg';

const GithubButton = () => {
    return (
        <a href="https://github.com/rusanov-dmitry" className={styles.button} target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="Github Icon"/>
            VISIT MY GITHUB
        </a>
    );
}

export default GithubButton;