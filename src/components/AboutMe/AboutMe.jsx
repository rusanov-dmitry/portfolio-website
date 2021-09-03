import React from 'react';
import styles from './AboutMe.module.css';
import avatar from '../../assets/avatar.jpg';
import handIcon from '../../assets/waving-hand.svg';

const AboutMe = () => {
    return (
        <section className={styles.container}>
            <header className={styles.greetingHeader}>
                <img className={styles.photo} src={avatar} alt="Avatar"/>
                <h1 className={styles.title}>Hi, I’m Dmitry!</h1>
                <img className={styles.hand} src={handIcon} alt="Waving Hand"/>
            </header>
            <article className={styles.generalInfo}>
                <p>I’m a front-end developer who loves his job! I like to immediately see the result of my work in the
                    browser, and it makes me happy!</p>
                <div className={styles.skills}>
                    <h3>I make a front-end for my apps using:</h3>
                    <ul className={styles.skillsList}>
                        <li>HTML/CSS/SASS</li>
                        <li>JavaScript</li>
                        <li>React, Redux, Hooks</li>
                    </ul>
                </div>
            </article>
            <footer className={styles.contactInfo}>
                <p>You can reach me by email:</p>
                <a href="mailto: r0llit@protonmail.com">r0llit@protonmail.com</a>
            </footer>
        </section>
    );
}

export default AboutMe;