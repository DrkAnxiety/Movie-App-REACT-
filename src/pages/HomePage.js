import { Slider } from '../components/Slider'
import { ListMovies } from '../components/ListMovies'
import styles from '../stylesheets/HomePage.module.css'
import { Form } from '../components/Form'
import { useState } from 'react'

export const HomePage = () => {
  /**
   * Aqui se pone el formulario de busqueda
   */

  const [movieName, setMovieName] = useState('')

  const handleOnChange = (movieKeyword) => {
    setMovieName(movieKeyword)
  }

  return (
    <article className={styles.mainContainerMovies}>
      <Form handleChange={handleOnChange} />
      <Slider autoPlay={true} />
      <ListMovies movieName={movieName}/>
    </article>
  )
}
