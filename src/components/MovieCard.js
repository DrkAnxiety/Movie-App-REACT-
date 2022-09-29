import styles from '../stylesheets/MovieCard.module.css'
import { Link } from 'react-router-dom'
import { AiTwotoneStar } from 'react-icons/ai'
export const MovieCard = ({ movie }) => {
  const IMG_URL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <Link to={`/movies/${movie.id}`}>
          <img
            src={IMG_URL}
            alt={movie.title}
            className={styles.cardImgContainer}
          />
          <div className={styles.descCardContent}>
            <h2>{movie.title}</h2>
            <p>
              {movie.vote_average}
              <AiTwotoneStar className={styles.starLogoContainer} />
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}
