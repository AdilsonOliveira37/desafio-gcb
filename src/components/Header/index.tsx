import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export function Header() {

  const [openBtnBurger, setOpenBtnBurger] = useState(false);

  function handdleBtnBurgerOpen() {
    if (openBtnBurger) {
      setOpenBtnBurger(false);
    } else {
      setOpenBtnBurger(true);
    }
  }

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <a href="/">
          <h1>Healthy Food</h1>
        </a>
        <div
          onClick={handdleBtnBurgerOpen}
          className={openBtnBurger ? styles.btnBurgerOpen : styles.btnBurgerClosed}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav className={openBtnBurger ? styles.navbar : ''}>
          <Link className={styles.linkHeader} to="/">HELTHY RECIPES</Link>
          <Link className={styles.linkHeader} to="/">BLOG</Link>
          <Link className={styles.linkHeader} to="/">JOIN</Link>
          <Link className={styles.linkHeader} to="/signup">REGISTER</Link>
        </nav>
      </div>
    </header>
  )
}