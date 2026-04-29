import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <header className={styles.navbar}>
      <a href="#about" className={styles.logo}>
        Diego Andino
      </a>

      <nav>
        <ul className={styles.navlinks}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
        </ul>
      </nav>

      <button className={styles.languageButton}>EN</button>
    </header>
  );
}

export default NavBar;