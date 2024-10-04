'use client'

import React from 'react'
import styles from './page.module.css'
import { useInView } from 'react-intersection-observer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiamond } from '@fortawesome/free-solid-svg-icons'

const Pricing = () => {
  const { ref: firstFeatureRef, inView: isFirstFeatureVisible } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: secondFeatureRef, inView: isSecondFeatureVisible } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: thirdFeatureRef, inView: isThirdFeatureVisible } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id='pricing' className={styles.section}>
      <div className={styles.titles}>
        <h2>Our expansions packs</h2>
        <h3>Enhance Your Sims' World</h3>
        <p>Find the expansion pack of your dream for more amazing gameplay.</p>
      </div>
        <div className={styles.all_packs}>
          <div className={`${styles.pricing_container} ${isFirstFeatureVisible ? `${styles.animateDelayed}` : ''}`} ref={firstFeatureRef}>
            <div className={styles.pack_type}>
              <h5>Expansion Pack</h5>
              <p>Large packs that expand your game and take your Sims on new adventures.</p>
            </div>
            <div className={styles.pack_pricing}>
              <p>CHF 39.99</p>
              <p>Base game required</p>
            </div>
            <ul className={styles.pack_features}>
              <li>
                <figure className={styles.icon_container_primary}>
                  <FontAwesomeIcon className={styles.icon} icon={faDiamond} />
                </figure>
                <p>Brand New World</p>
              </li>
              <li>
                <figure className={styles.icon_container_primary}>
                  <FontAwesomeIcon className={styles.icon} icon={faDiamond} />
                </figure>
                <p>New ways to design homes</p>
              </li>
              <li>
                <figure className={styles.icon_container_primary}>
                  <FontAwesomeIcon className={styles.icon} icon={faDiamond} />
                </figure>
                <p>Stylish Furnishings</p>
              </li>
              <li>
                <figure className={styles.icon_container_primary}>
                  <FontAwesomeIcon className={styles.icon} icon={faDiamond} />
                </figure>
                <p>Unique fashion touch</p>
              </li>
              <li>
                <figure className={styles.icon_container_primary}>
                  <FontAwesomeIcon className={styles.icon} icon={faDiamond} />
                </figure>
                <p>Trendy Hairstyles</p>
              </li>
              <li>
                <figure className={styles.icon_container_primary}>
                  <FontAwesomeIcon className={styles.icon} icon={faDiamond} />
                </figure>
                <p>Career Opportunities</p>
              </li>
              <li>
                <figure className={styles.icon_container_primary}>
                  <FontAwesomeIcon className={styles.icon} icon={faDiamond} />
                </figure>
                <p>Unique Skills</p>
              </li>
              <li>
                <figure className={styles.icon_container_primary}>
                  <FontAwesomeIcon className={styles.icon} icon={faDiamond} />
                </figure>
                <p>Deeper Social Dynamics</p>
              </li>
            </ul>
            <div className={styles.pack_cta}>
              <button>See what's inside</button>
              <button>Buy now</button>
            </div>
          </div>

          <div className={`${styles.pricing_container} ${isSecondFeatureVisible ? `${styles.animateDelayed}` : ''}`} ref={secondFeatureRef}>
            <div className={styles.pack_type}>
              <h5>Game Packs</h5>
              <p>Medium-sized packs that add new experiences to play in new thematic ways</p>
            </div>
            <div className={styles.pack_pricing}>
              <p>CHF 19.99</p>
              <p>Base game required</p>
            </div>
            <ul className={styles.pack_features}>
              <li>
                <figure className={styles.icon_container_primary}>
                  <FontAwesomeIcon className={styles.icon} icon={faDiamond} />
                </figure>
                <p>Brand New World</p>
              </li>
              <li>
                <figure className={styles.icon_container_primary}>
                  <FontAwesomeIcon className={styles.icon} icon={faDiamond} />
                </figure>
                <p>New ways to design homes</p>
              </li>
              <li>
                <figure className={styles.icon_container_primary}>
                  <FontAwesomeIcon className={styles.icon} icon={faDiamond} />
                </figure>
                <p>Stylish Furnishings</p>
              </li>
              <li>
                <figure className={styles.icon_container_primary}>
                  <FontAwesomeIcon className={styles.icon} icon={faDiamond} />
                </figure>
                <p>Unique fashion touch</p>
              </li>
              <li>
                <figure className={styles.icon_container_primary}>
                  <FontAwesomeIcon className={styles.icon} icon={faDiamond} />
                </figure>
                <p>Trendy Hairstyles</p>
              </li>
              <li>
                <figure className={styles.icon_container_primary}>
                  <FontAwesomeIcon className={styles.icon} icon={faDiamond} />
                </figure>
                <p>Career Opportunities</p>
              </li>
              <li>
                <figure className={styles.icon_container_primary}>
                  <FontAwesomeIcon className={styles.icon} icon={faDiamond} />
                </figure>
                <p>Unique Skills</p>
              </li>
              <li>
                <figure className={styles.icon_container_primary}>
                  <FontAwesomeIcon className={styles.icon} icon={faDiamond} />
                </figure>
                <p>Deeper Social Dynamics</p>
              </li>
            </ul>
            <div className={styles.pack_cta}>
              <button>See what's inside</button>
              <button>Buy now</button>
            </div>
          </div>

          <div className={`${styles.pricing_container} ${isThirdFeatureVisible ? `${styles.animateDelayed}` : ''}`} ref={thirdFeatureRef}>
            <div className={styles.pack_type}>
              <h5>Stuff Packs</h5>
              <p>Smaller packs that add more to your Sims' lives with fun objects and fashion.</p>
            </div>
            <div className={styles.pack_pricing}>
              <p>CHF 9.99</p>
              <p>Base game required</p>
            </div>
            <ul className={styles.pack_features}>
              <li>
                <figure className={styles.icon_container_primary}>
                  <FontAwesomeIcon className={styles.icon} icon={faDiamond} />
                </figure>
                <p>Brand New Gameplay</p>
              </li>
              <li>
                <figure className={styles.icon_container_primary}>
                  <FontAwesomeIcon className={styles.icon} icon={faDiamond} />
                </figure>
                <p>New ways to design homes</p>
              </li>
              <li>
                <figure className={styles.icon_container_primary}>
                  <FontAwesomeIcon className={styles.icon} icon={faDiamond} />
                </figure>
                <p>Stylish Furnishings</p>
              </li>
              <li>
                <figure className={styles.icon_container_primary}>
                  <FontAwesomeIcon className={styles.icon} icon={faDiamond} />
                </figure>
                <p>Unique fashion touch</p>
              </li>
              <li>
                <figure className={styles.icon_container_primary}>
                  <FontAwesomeIcon className={styles.icon} icon={faDiamond} />
                </figure>
                <p>Trendy Hairstyles</p>
              </li>
              <li>
                <figure className={styles.icon_container_primary}>
                  <FontAwesomeIcon className={styles.icon} icon={faDiamond} />
                </figure>
                <p>Career Opportunities</p>
              </li>
              <li>
                <figure className={styles.icon_container_primary}>
                  <FontAwesomeIcon className={styles.icon} icon={faDiamond} />
                </figure>
                <p>Unique Skills</p>
              </li>
              <li>
                <figure className={styles.icon_container_primary}>
                  <FontAwesomeIcon className={styles.icon} icon={faDiamond} />
                </figure>
                <p>Deeper Social Dynamics</p>
              </li>
            </ul>
            <div className={styles.pack_cta}>
              <button>See what's inside</button>
              <button>Buy now</button>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Pricing
