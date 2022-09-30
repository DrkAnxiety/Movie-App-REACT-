import style from '../stylesheets/Form.module.css'
import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome as Home } from 'react-icons/ai'

export const Form = ({ handleChange }) => {
  const [movieName, setMovieName] = useState('')
  const handleOnChange = (e) => {
    setMovieName(e.target.value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log('submit del formulario');
    handleChange(movieName)
    setMovieName('')
  }

  return (
    <article className={style.formContainer}>
      <Link to='/'>
        <div className={style.homeButtonContainer}>
          <Home className={style.logoHomeContainer} />
        </div>
      </Link>
      <form className={style.formContent} onSubmit={handleOnSubmit}>
        <div className={style.inputContainer}>
          <FiSearch className={style.searchIcon} />
          <input
            type='text'
            className={style.inputSearch}
            placeholder='Search movie by...'
            value={movieName}
            onChange={handleOnChange}
          />
        </div>
      </form>
    </article>
  )
}
