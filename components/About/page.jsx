"use client"

import React from 'react';
import { useInView } from 'react-intersection-observer';
import style from './page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson, faPeopleRoof, faSkull, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const { ref: firstFeatureRef, inView: isFirstFeatureVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: secondFeatureRef, inView: isSecondFeatureVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: thirdFeatureRef, inView: isThirdFeatureVisible } = useInView({ triggerOnce: true, threshold: 0.1 });

  const { ref: titlesRef, inView: areTitlesVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: descriptionRef, inView: isDescriptionVisible } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className={style.section}>
      <div className={style.about_the_game}>
        <div
          className={`${style.titles} ${areTitlesVisible ? style.animateTitles : ''}`}
          ref={titlesRef}
        >
          <h2>How to play</h2>
          <h3>Build your dream world in Sims, all at your own pace.</h3>
        </div>
        <div
          className={`${style.description} ${isDescriptionVisible ? style.animateDescription : ''}`}
          ref={descriptionRef}
        >
          <p>Create your perfect life in Sims with limitless possibilities. Customize, build, and explore endlessly—no boundaries, just creativity.</p>
          <button>Buy Add-ons</button>
        </div>
      </div>

      <div className={style.game_features}>
        <div
          className={`${style.features_item} ${isFirstFeatureVisible ? style.animate : ''}`}
          ref={firstFeatureRef}
        >
          <div className={style.features_icons}>
            <figure className={style.icon_container_primary}>
              <FontAwesomeIcon className={style.icon} icon={faPerson} />
            </figure>
            <div className={style.styling_arrow}>
              <span></span>
              <figure>
                <FontAwesomeIcon icon={faAngleRight} />
              </figure>
            </div>
          </div>
          <h4>Design Your Unique Sim Life</h4>
          <p>Craft distinct characters and control their lives in a world of endless possibilities.</p>
        </div>

        <div
          className={`${style.features_item} ${isSecondFeatureVisible ? style.animateDelayed : ''}`}
          ref={secondFeatureRef}
        >
          <div className={style.features_icons}>
            <figure className={style.icon_container_secondary}>
              <FontAwesomeIcon className={style.icon} icon={faPeopleRoof} />
            </figure>
            <div className={style.styling_arrow}>
              <span></span>
              <figure>
                <FontAwesomeIcon icon={faAngleRight} />
              </figure>
            </div>
          </div>
          <h4>Build Your Dream World</h4>
          <p>Create and customize vibrant neighborhoods and stunning homes to bring your vision to life.</p>
        </div>

        <div
          className={`${style.features_item} ${isThirdFeatureVisible ? style.animateDelayed2 : ''}`}
          ref={thirdFeatureRef}
        >
          <figure className={style.icon_container_tertiary}>
            <FontAwesomeIcon className={style.icon} icon={faSkull} />
          </figure>
          <h4>Guide Sim Through Life's Journey</h4>
          <p>Experience the full cycle of life with your Sim, from joyful moments to unexpected endings.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
