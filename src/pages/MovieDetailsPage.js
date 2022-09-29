import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from '../stylesheets/MovieDetailsPage.module.css'

export const MovieDetailsPage = () => {
  const { movieId } = useParams()

  const URL_API = `https://api.themoviedb.org/3/movie/${movieId}`
  const HEADER = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTk3YzEyNzQzZmFkZmVjMTEzNmUwMWQ5YTRkNDE2MCIsInN1YiI6IjYyYmU2MmI3ZmJhNjI1MDBlYTMyNDI1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QHZysOoZj2GSL-0zIe4h4V37u8sMxlOCw12ploQNGTA',
      'Content-Type': 'application/json;charset=utf-8',
    },
  }

  const [movie, setMovie] = useState({})
  const IMG_URL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  useEffect(() => {
    fetch(URL_API, HEADER)
      .then((resp) => resp.json())
      .then((data) => {
        {
          console.log('Peticion Completada  Descripcion:)')
          setMovie(data)
          console.log(data)
        }
      })
  }, [movieId])


  return (
    <article className={styles.detailsCardContainer}>
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
    </article>
  )
}
