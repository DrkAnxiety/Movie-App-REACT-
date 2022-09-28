import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from '../stylesheets/MovieDetailsPage.module.css'
export const MovieDetailsPage = () => {
  const {movieId} = useParams()

  const URL_API = `https://api.themoviedb.org/3/movie/${movieId}`
  const HEADER = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTk3YzEyNzQzZmFkZmVjMTEzNmUwMWQ5YTRkNDE2MCIsInN1YiI6IjYyYmU2MmI3ZmJhNjI1MDBlYTMyNDI1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QHZysOoZj2GSL-0zIe4h4V37u8sMxlOCw12ploQNGTA',
      'Content-Type': 'application/json;charset=utf-8',
    },
  }

  const [movies, setMovies] = useState({})

  useEffect(() => {
    fetch(URL_API, HEADER)
      .then((resp) => resp.json())
      .then((data) => {
        {
          console.log('Peticion Completada  Descripcion:)', data.results)
          setMovies(data.results)
        }
      })
  }, [movieId])

  return  <article>
    Este es el ID de la pelicula seleccionada {movieId}
  </article>
}