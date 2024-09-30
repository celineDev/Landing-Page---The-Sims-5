import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import loadingPhrases from './../../data/loadingPhrases.jsx'

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState('Waiting for the site to load...')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getRandomPhrase = () => {
      const randomIndex = Math.floor(Math.random() * loadingPhrases.length)
      return loadingPhrases[randomIndex]
    }

    const interval = setInterval(() => {
      setCurrentPhrase(getRandomPhrase())
      setLoading(false)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className={styles.section}>
      <h1>Live the Virtual<br />Life of your <span className={styles.logo_color}>Dream</span></h1>
      <p className={styles.hero_p}>Playing The Sims unlocks endless creativity, allowing you to shape, explore, and transform your virtual world.</p>
      <button className={styles.cta}>Play The Sims 5</button>
      <p className={styles.loading_phrases}>{currentPhrase}</p>
      <div>
        <figure>
          <Image
          className={styles.green_plumbob}
          src="/assets/green_plumbob_112x229px.png"
          alt="Green Plumbob"
          width={80}
          height={150}
          priority
        />
        </figure>
        <figure>
          <Image
          className={styles.orange_plumbob}
          src="/assets/orange_plumbob_112x229px.png"
          alt="Orange Plumbob"
          width={30}
          height={50}
          priority
        />
        </figure>
        <figure>
          <Image
          className={styles.red_plumbob}
          src="/assets/red_plumbob_24x50px.png"
          alt="Red Plumbob"
          width={24}
          height={45}
          priority
        />
        </figure>
      </div>
    </section>
  )
}

export default Hero
