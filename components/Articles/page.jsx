'use client'

import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import useWindowWidth from '../../hooks/useWindowWidth'
import articles from './../../data/articles'

const Articles = () => {
    const windowWidth = useWindowWidth()

  return (
    <section className={styles.section}>
      <h2>blogs</h2>
      <h3>News & Articles</h3>
      <p>Best articles about your favorite game.</p>
      <div className={styles.articles}>
        {windowWidth > 640 ? (
            articles.map((article, i) => (
                <a key={i} href={article.link}>
                    <figure>
                        <Image src={article.img} alt={article.alt} width={223} height={223} priority />
                        <figcaption>
                            <h2>{article.h2}</h2>
                            <h3>{article.h3}</h3>
                            <p>{article.text}</p>
                        </figcaption>
                    </figure>
                </a>
            ))
        ):(
        articles.map((article, i) => (
            <a key={i} href={article.link}>
                <figure>
                    <Image src={article.mobile_img} alt={article.alt} width={550} height={160} priority />
                    <figcaption>
                        <h2>{article.h2}</h2>
                        <h3>{article.h3}</h3>
                        <p>{article.mobile_text}</p>
                    </figcaption>
                </figure>
            </a>
            ))
        )}
      </div>
    </section>
  )
}

export default Articles
