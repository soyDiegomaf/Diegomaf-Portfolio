import style from './NavBar.module.css'

function NavBar() {
  return (
    <header className={style.navbar}>
      <h1>Diego Andino</h1>
      <ul className={style.navlinks}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  )
}

export default NavBar