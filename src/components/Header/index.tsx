import { useState } from 'react';
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
          <a href="/">HEALTHY RECIPES</a>
          <a href="/">BLOG</a>
          <a href="/">JOIN</a>
          <button>REGISTER</button>
        </nav>
      </div>
    </header>
  )
}