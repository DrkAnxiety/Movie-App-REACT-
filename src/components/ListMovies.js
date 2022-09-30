import { useState, useEffect } from 'react'
import { Get } from '../resources/Service'
import styles from '../stylesheets/ListMovies.module.css'
import { MovieCard } from './MovieCard'
import { Spinner } from './Spinner'

export const ListMovies = ({ movieName }) => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const URL_MOVIE = movieName
      ? `/search/movie?query=${movieName}`
      : `/discover/movie`

    Get(URL_MOVIE).then((data) => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
      setMovies(data.results)
      console.log(data.results)
    })



    /**
        const URL_TV = movieName ? `/search/tv?query=${movieName}` : `/discover/tv`
        Get(URL_TV).then((data) => {
          setTimeout(() => {
            setIsLoading(false)
          }, 1000)
            setMovies((prev) => prev.concat(data.results))
            console.log(data.results)
        })
     */
  }, [movieName])

  return (
    <article className={styles.moviesContainer}>
      {isLoading ? (
        <Spinner />
      ) : (
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      )}
    </article>
  )
}
