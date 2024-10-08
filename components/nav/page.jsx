'use client'

import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import Hero from "../Hero/page";
import links from '../../data/links.jsx'

const Nav = () => {
  const [active, setActive] = useState(false)

  const toggleMenu = () => {
    setActive(!active)
  }

  return (
    <header id='header' className={styles.header}>
      <nav className={styles.nav}>
        <p className={styles.logo}><Link href="#">Sim<span className={styles.logo_color}>s</span></Link></p>

        <Link href="#" className={active ? styles.activeBurger : styles.burger} aria-label='menu' aria-expanded={active} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </Link>

        <ul className={styles.nav_links}>
          {links.map((item, i) => (
            <li key={i}>
              <Link href={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className={styles.cta}>Play for Free*</button>
      </nav>

      <div className={`${styles.nav_links_mobile} ${active ? styles.open : ''}`}>
          <ul>
            {links.map((item, i) => (
              <li key={i}>
                <Link href={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <button className={styles.cta_mobile}>Play for Free*</button>
      </div>
      <Hero />
    </header>
  )
}

export default Nav