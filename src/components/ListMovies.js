import { Spinner } from './Spinner'
import { MovieCard } from './MovieCard'
import { Get } from '../resources/Service'
import { useState, useEffect } from 'react'
import styles from '../stylesheets/ListMovies.module.css'

export const ListMovies = ({ movieName, suggestion }) => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const URL = () => {
    if(movieName || suggestion){
      if(movieName){
        return `/search/movie?query=${movieName}`
      } else {
        return `/search/movie?query=${suggestion}`
      }
    } else {
      return `/discover/movie`
    }
  }

  useEffect(() => {
    const URL_MOVIE = URL()

    setIsLoading(true)
    Get(URL_MOVIE).then((data) => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
      setMovies(data.results)
    })
  }, [movieName, suggestion])

  return (
    <article className={isLoading ? styles.moviesContainerSpinner: styles.moviesContainer}>
      {isLoading ? (
        <Spinner />
      ) : (
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      )}
    </article>
  )
}
