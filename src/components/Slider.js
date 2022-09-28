import img1 from '../images/img-one.jpeg'
import img6 from '../images/img-six.jpeg'
import img8 from '../images/img-eight.jpeg'
import img9 from '../images/img-nine.jpeg'
import img10 from '../images/img-ten.jpeg'

import bgImg1 from '../images/bg-img-one.png'
import bgImg6 from '../images/bg-img-six.png'
import bgImg8 from '../images/bg-img-eight.png'
import bgImg9 from '../images/bg-img-nine.png'
import bgImg10 from '../images/bg-img-ten.png'

import { useEffect, useState } from 'react'
import styles from '../stylesheets/Slider.module.css'
import { IoIosArrowForward as Next } from 'react-icons/io'
import { IoIosArrowBack as Previous } from 'react-icons/io'

export const Slider = ({ autoPlay }) => {
  const IMAGES = [img1, img6, img8, img9, img10]
  const BG_IMAGES = [bgImg1, bgImg6, bgImg8, bgImg9, bgImg10]

  const [selectedIndex, setSelectedIndex] = useState(0)

  const selectNewImage = (index, next = true) => {
    const condition = next ? index < IMAGES.length - 1 : index > 0
    const nextIndex = next
      ? condition
        ? index + 1
        : 0
      : condition
      ? index - 1
      : IMAGES.length - 1
    setSelectedIndex(nextIndex)
  }

  const previus = () => {
    selectNewImage(selectedIndex, false)
  }

  const next = () => {
    selectNewImage(selectedIndex)
  }

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex)
      }, 5000)

      return () => clearInterval(interval)
    }
  })

  return (
    <>
      <article className={styles.carruselContainer}>
        <div className={styles.btnContainer}>
          <button onClick={previus}>
            <Previous className={styles.controlBtn} />
          </button>
        </div>
        <section className={styles.carruselContent}>
          <img src={IMAGES[selectedIndex]} className={styles.imgContainer} />
          <img
            src={BG_IMAGES[selectedIndex]}
            className={styles.bannerContainer}
          />
        </section>
        <div className={styles.btnContainer}>
          <button onClick={next}>
            <Next className={styles.controlBtn} />
          </button>
        </div>
      </article>
    </>
  )
}
