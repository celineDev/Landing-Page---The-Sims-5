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
            <p className={styles.logo}><a href="/">Sim<span className={styles.logo_color}>s</span></a></p>
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
              <a href="https://www.facebook.com"  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={styles.icon_color} icon={faFacebook} size='lg'></FontAwesomeIcon></a>
              <a href="https://www.instagram.com"  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon name='test' icon={faInstagram} size='lg'></FontAwesomeIcon></a>
              <a href="https://www.linkedin.com"  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size='lg'></FontAwesomeIcon></a>
              <a href="https://www.dribble.com"  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDribbble} size='lg'></FontAwesomeIcon></a>
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
