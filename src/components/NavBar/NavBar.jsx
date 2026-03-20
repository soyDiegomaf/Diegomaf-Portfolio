import style from './NavBar.module.css'

function NavBar() {
  return (
    <header className={style.navbar}>
      <h2>Diego Andino</h2>
      <ul className={style.navlinks}>
        <li>
          <a href="#home">About</a>
        </li>
        <li>
          <a href="#about">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <h2>Language</h2>
    </header>
  )
}

export default NavBar