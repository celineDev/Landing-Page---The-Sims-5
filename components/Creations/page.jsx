'use client'

import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import useWindowWidth from '../../hooks/useWindowWidth'
import creations from '../../data/creations.jsx'

const Creations = () => {
  const windowWidth = useWindowWidth()



  return (
    <section className={styles.section}>
      <h3>Our Creators Works</h3>
      <p>Discover breathtaking Sims creations, showcasing boundless creativity in architecture, design, and storytelling.</p>
      {windowWidth > 766 ? (
        <div className={styles.carousel_wrapper}>
          <figure>
            {creations
            .filter((creation) => creation.id <= 3)
            .concat(creations.filter((creation) => creation.id <= 3))
            .concat(creations.filter((creation) => creation.id <= 3))
            .concat(creations.filter((creation) => creation.id <= 3))
            .map((creation, i) => (
              <Image
                key={`${creation.id}-${i}`}
                src={creation.src}
                alt={creation.alt}
                width={300}
                height={300}
                priority />
            ))}
          </figure>

          <figure>
            {creations
            .filter((creation) => creation.id >= 4 && creation.id <= 6)
            .concat(creations.filter((creation) => creation.id >= 4 && creation.id <= 6))
            .concat(creations.filter((creation) => creation.id >= 4 && creation.id <= 6))
            .concat(creations.filter((creation) => creation.id >= 4 && creation.id <= 6))
            .map((creation, i) => (
              <Image
                key={`${creation.id}-${i}`}
                src={creation.src}
                alt={creation.alt}
                width={300}
                height={300}
                priority />
            ))}
          </figure>

          <figure>
            {creations
            .filter((creation) => creation.id >= 7 && creation.id <= 9)
            .concat(creations.filter((creation) => creation.id >= 7 && creation.id <= 9))
            .concat(creations.filter((creation) => creation.id >= 7 && creation.id <= 9))
            .concat(creations.filter((creation) => creation.id >= 7 && creation.id <= 9))
            .map((creation, i) => (
              <Image
                key={`${creation.id}-${i}`}
                src={creation.src}
                alt={creation.alt}
                width={300}
                height={300}
                priority />
            ))}
          </figure>

          <figure>
            {creations
            .filter((creation) => creation.id >= 10 && creation.id <= 12)
            .concat(creations.filter((creation) => creation.id >= 10 && creation.id <= 12))
            .concat(creations.filter((creation) => creation.id >= 10 && creation.id <= 12))
            .concat(creations.filter((creation) => creation.id >= 10 && creation.id <= 12))
            .map((creation, i) => (
              <Image
                key={`${creation.id}-${i}`}
                src={creation.src}
                alt={creation.alt}
                width={300}
                height={300}
                priority />
            ))}
          </figure>
        </div>
      ) : (
      <div className={styles.carousel_wrapper}>
        <figure>
          {creations
          .filter((creation) => creation.id < 3 || creation.id >= 7 && creation.id <= 9)
          .concat(creations.filter((creation) => creation.id < 3 || creation.id >= 7 && creation.id <= 9))
          .map((creation, i) => (
            <Image
              key={`${creation.id}-${i}`}
              src={creation.src}
              alt={creation.alt}
              width={300}
              height={300}
              priority />
          ))}
        </figure>

        <figure>
          {creations
          .filter((creation) => creation.id >= 4 && creation.id <= 6 || creation.id >= 10 && creation.id <= 12)
          .concat(creations.filter((creation) => creation.id >= 4 && creation.id <= 6 || creation.id >= 10 && creation.id <= 12))
          .map((creation, i) => (
            <Image
              key={`${creation.id}-${i}`}
              src={creation.src}
              alt={creation.alt}
              width={300}
              height={300}
              priority />
          ))}
        </figure>
      </div>
      )}
    </section>
  )
}

export default Creations
