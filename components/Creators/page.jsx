import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import creators from '../../data/creators.jsx'

const Creators = () => {

  return (
    <section id='creators' className={styles.section}>
      <div className={styles.titles}>
        <h2>Testimonials</h2>
        <h3>Met our Creators</h3>
        <p>Our creators rave about The Sims, calling it their ultimate playground for limitless creativity and storytelling.</p>
      </div>
      <div className={styles.carousel_wrapper}>
        {creators.map((creator, i) => (
          <div key={i} className={styles.creator_card}>
            <figure>
              <Image
                src={creator.image}
                alt={creator.alt}
                width={32}
                height={32}
                priority/>
              <figcaption>
                <p>{creator.name}</p>
                <p>{creator.username}</p>
              </figcaption>
            </figure>
            <p>{creator.testimonial}</p>
        </div>
        ))}
      </div>

      <div className={styles.carousel_wrapper}>
        {creators.map((creator, i) => (
          <div key={i} className={styles.creator_card}>
            <figure>
              <Image
                src={creator.image}
                alt={creator.alt}
                width={32}
                height={32}
                priority/>
              <figcaption>
                <p>{creator.name}</p>
                <p>{creator.username}</p>
              </figcaption>
            </figure>
            <p>{creator.testimonial}</p>
        </div>
        ))}
      </div>

    </section>
  )
}

export default Creators
