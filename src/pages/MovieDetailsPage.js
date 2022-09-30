import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from '../components/Spinner'
import { Get } from '../resources/Service'
import styles from '../stylesheets/MovieDetailsPage.module.css'

export const MovieDetailsPage = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const IMG_URL = !isLoading
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : ``

  useEffect(() => {
    setIsLoading(true)
    Get(`/movie/${movieId}`).then((data) => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
      setMovie(data)
    })
  }, [movieId])


  return (
    <article className={styles.detailsCardContainer}>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.detailsCardContent}>
          <section className={styles.posterContainer}>
            <img src={IMG_URL} alt={movie.title} />
          </section>
          <section className={styles.descriptionContainer}>
            <div className={styles.commentConent}>
              <h2>Title</h2>
              <p>{movie.title}</p>
            </div>
            <div className={styles.commentConent}>
              <h2>Realease Date</h2>
              <p>{movie.release_date}</p>
            </div>
            <div className={styles.commentConent}>
              <h2>Duration</h2>
              <p>{movie.runtime + ' min'}</p>
            </div>
            <div className={styles.overviewConent}>
              <h2>Overview.</h2>
              <p>{movie.overview}</p>
            </div>
          </section>
        </div>
      )}
    </article>
  )
}
