import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import MyProjects from './components/MyProjects/MyProjects';

const App = () => {
    return (
    <div className={styles.appWrapper}>
      <Header />
        <main className={styles.flexContainer}>
            <AboutMe />
            <MyProjects />
        </main>
        <footer className={styles.footer}>© 2021 DmitryRusanov. All rights Reserved</footer>
    </div>
  );
}

export default App;
