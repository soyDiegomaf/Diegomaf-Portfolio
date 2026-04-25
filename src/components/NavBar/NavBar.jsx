import { useEffect, useState } from "react";
import styles from "./NavBar.module.css";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function NavBar() {
  const [activeSection, setActiveSection] = useState("about");
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 120);
      setLastScrollY(currentScrollY);

      links.forEach((link) => {
        const section = document.querySelector(link.href);

        if (section) {
          const sectionTop = section.offsetTop - 120;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (currentScrollY >= sectionTop && currentScrollY < sectionBottom) {
            setActiveSection(link.href.replace("#", ""));
          }
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`${styles.navbar} ${isHidden ? styles.hidden : ""}`}>
      <a href="#about" className={styles.logo}>
        Diego Andino
      </a>

      <nav>
        <ul className={styles.navlinks}>
          {links.map((link) => {
            const sectionName = link.href.replace("#", "");

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeSection === sectionName ? styles.active : ""}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <button className={styles.languageButton}>EN</button>
    </header>
  );
}

export default NavBar;