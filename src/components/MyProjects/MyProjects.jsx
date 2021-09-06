import React from 'react';
import styles from './MyProjects.module.css';
import testselfPreview from '../../assets/testself-preview.png';
import splittipsPreview from '../../assets/splittips-preview.png';
import GithubButton from '../GithubButton/GithubButton';

const MyProjects = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>My projects</h1>
            <div className={styles.projectInfo}>
                <img src={testselfPreview} alt="Preview"/>
                <div className={styles.projectDescription}>
                    <h2>TestSelf</h2>
                    <p>Quiz app built with React + Redux.
                        You can check it here:
                        <a href="https://testself.netlify.app/" target="_blank" rel="noreferrer">testself.netlify.app</a></p>
                </div>
            </div>
                <hr/>
            <div className={styles.projectInfo}>
                <img src={splittipsPreview} alt="Preview"/>
                <div className={styles.projectDescription}>
                    <h2>Split Tips</h2>
                    <p>Tip calculator app built with React using React Hooks.
                        Check it out:
                        <a href="https://splittips.netlify.app/" target="_blank" rel="noreferrer">splittips.netlify.app</a></p>
                </div>
            </div>
            <GithubButton />
        </section>
    );
}

export default MyProjects;