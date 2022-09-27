import { useState, useEffect } from 'react'
import styles from '../stylesheets/ListMovies.module.css'
import { MovieCard } from './MovieCard'

export const ListMovies = () => {
  const URL_API = 'https://api.themoviedb.org/3/discover/movie/'
  const HEADER = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTk3YzEyNzQzZmFkZmVjMTEzNmUwMWQ5YTRkNDE2MCIsInN1YiI6IjYyYmU2MmI3ZmJhNjI1MDBlYTMyNDI1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QHZysOoZj2GSL-0zIe4h4V37u8sMxlOCw12ploQNGTA',
      'Content-Type': 'application/json;charset=utf-8',
    },
  }

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(URL_API, HEADER)
      .then((resp) => resp.json())
      .then((data) => {
        {
          console.log('Peticion Completada :)')
          setMovies(data.results)
        }
      })
  }, [])

  return (
    <article className={styles.moviesContainer}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </article>
  )
}
