'use client'

import React from 'react'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import links from './../../data/links'
import { faCircleArrowRight, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const { ref: inViewElement, inView: isElementInView } = useInView({ threshold: 0.1 })

  return (
    <footer id='contact' className={styles.section}>
      <div className={`${styles.moving} ${isElementInView ? styles.animate : ''}`} ref={inViewElement}>
        <h3>Become part of <br /> the community</h3>
        <p>Unlock new adventures and <br /> expand your gameplay !</p>
        <div className={styles.button}>
          <Link href="#">See Pricing
            <figure>
              <FontAwesomeIcon icon={faCircleArrowRight} width={16} height={16}></FontAwesomeIcon>
            </figure>
          </Link>
        </div>
      </div>

      <div className={styles.static}>
        <div className={styles.our_company}>
          <div className={styles.about_us}>
            <p className={styles.logo}><Link href="/">Sim<span className={styles.logo_color}>s</span></Link></p>
            <p>Sims - the ultimate source to stay updated on all upcoming content, from expansions to game-changing features.</p>
          </div>

          <div className={styles.contact}>
            <Link className={styles.mail} href="mailto:info@sims.com">
              <figure>
                <FontAwesomeIcon icon={faEnvelope} width={20} height={20}></FontAwesomeIcon>
              </figure>
              info@sims.com
            </Link>
            <Link className={styles.phone} href="tel:(123) 456 789">
              <figure>
                <FontAwesomeIcon icon={faPhone} width={20} height={20}></FontAwesomeIcon>
              </figure>
              (123) 456 789</Link>
            <figure className={styles.icon}>
              <Link href="https://www.facebook.com"  target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FontAwesomeIcon className={styles.icon_color} icon={faFacebook} size='lg'></FontAwesomeIcon></Link>
              <Link href="https://www.instagram.com"  target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FontAwesomeIcon name='test' icon={faInstagram} size='lg'></FontAwesomeIcon></Link>
              <Link href="https://www.linkedin.com"  target="_blank" rel="noopener noreferrer" aria-label="Linkedin"><FontAwesomeIcon icon={faLinkedin} size='lg'></FontAwesomeIcon></Link>
              <Link href="https://www.dribble.com"  target="_blank" rel="noopener noreferrer" aria-label="Dribble"><FontAwesomeIcon icon={faDribbble} size='lg'></FontAwesomeIcon></Link>
            </figure>
          </div>
        </div>

        <div className={styles.nav}>
          <ul>
          {links.map((link, i) => (
            <li key={i}><Link href={link.link}>{link.name}</Link></li>
          ))}
          </ul>

          <p>&copy; {currentYear} Sims corporation - All Right Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
