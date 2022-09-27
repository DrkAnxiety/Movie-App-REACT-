import styles from '../stylesheets/MovieCard.module.css'
import { Link } from 'react-router-dom'

export const MovieCard = ({ movie }) => {
  const IMG_URL = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <Link to={`/movies/${movie.id}`}>
          <img
            src={IMG_URL}
            alt={movie.title}
            className={styles.cardImgContainer}
          />
          <div>
            <p>{movie.title}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
