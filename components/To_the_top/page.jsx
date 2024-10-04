'use client'

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const To_the_top = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 1000) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    toggleVisibility()
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    isVisible && (
      <Link className={styles.to_the_top} href="#header">
        <figure>
          <FontAwesomeIcon icon={faArrowUp} size='lg' />
        </figure>
      </Link>
    )
  )
}

export default To_the_top
