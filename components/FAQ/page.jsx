'use client'

import React, { useState } from 'react'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import faq from './../../data/faq'

const FAQ = () => {
  const [text, setText] = useState('')
  const [openElementId, setOpenElementId] = useState(null)

  const showAnswer = (id) => {
    if (openElementId === id) {
      setOpenElementId(null)
    } else {
      setOpenElementId(id)
    }
  }

  return (
    <section className={styles.section}>
      <h3>FAQ's</h3>
      <p>Providing answers to your questions</p>
      <ul className={styles.faq}>
        {faq.map((element, i) => (
          <li key={i}>
            <div onClick={() => showAnswer(element.id)} className={styles.question}>
              <p>{element.question}</p>
              <figure>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`${openElementId === element.id ? styles.rotate : styles.rotateBack}
                  ${styles.icon}`}
                  width={14}
                  height={16} />
              </figure>
            </div>
            <p className={`${styles.answer} ${openElementId === element.id ? styles.open : styles.close}`}>{element.answer}</p>
          </li>
        ))}
      </ul>
      <form className={styles.form} action="">
        <textarea placeholder='Ask us what you want to know...' value={text} onChange={(e) => setText(e.target.value)}></textarea>
        <div>
          <p>We will never answer your questions because this site is a fake.</p>
          <button>Send</button>
        </div>
      </form>
    </section>
  )
}

export default FAQ
