import React, {useState} from 'react'
import styles from "./Navbar.module.css"
import { getImageUrl } from "../../utils.js"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} src={menuOpen ?getImageUrl("closeIcon.png") : getImageUrl("menuIcon.png") } alt="menu icon" onClick={() => setMenuOpen(!menuOpen)} />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
