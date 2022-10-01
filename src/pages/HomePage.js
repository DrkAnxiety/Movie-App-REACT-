import { Slider } from '../components/Slider'
import { ListMovies } from '../components/ListMovies'
import styles from '../stylesheets/HomePage.module.css'
import { Form } from '../components/Form'
import { useState } from 'react'
import { ListCards } from '../components/ListCards'

export const HomePage = () => {
  const [movieName, setMovieName] = useState('')
  const [suggest, setSuggest] = useState('')

  const handleOnChange = (movieKeyword) => {
    setMovieName(movieKeyword)
  }

  const handleSuggestion = (suggestion) => {
    setSuggest(suggestion)
    console.log(suggest);
  }

  return (
    <article className={styles.mainContainerMovies}>
      <Form handleChange={handleOnChange} />
      <Slider autoPlay={true} />
      <ListCards handleSuggestion={handleSuggestion}/>
      <ListMovies movieName={movieName} suggestion={suggest}/>
    </article>
  )
}
