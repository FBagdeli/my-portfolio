import React, {useState} from 'react'
import styles from "./Navbar.module.css"
import { getImageUrl } from "../../utils.js"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} src={getImageUrl("menuIcon.png")} alt="menu icon" />
        <ul className={styles.menuItems}>
          <li><a href="">About</a></li>
          <li><a href="">Experience</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
