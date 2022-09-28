import style from '../stylesheets/Header.module.css'
import { AiFillHome as Home } from 'react-icons/ai'
import { BiCameraMovie as Logo } from 'react-icons/bi'
import { TbLetterM } from 'react-icons/tb'
import { TbLetterO } from 'react-icons/tb'
import { TbLetterV } from 'react-icons/tb'
import { TbLetterI } from 'react-icons/tb'
import { TbLetterE } from 'react-icons/tb'

import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Header = () => {
  const [movieName, setMovieName] = useState('')

  return (
    <header className={style.headerContainer}>
      <Link to='/'>
        <div className={style.logoContainer}>
          <TbLetterM />
          <TbLetterO />
          <TbLetterV />
          <TbLetterI />
          <TbLetterE />
          <Logo className={style.mainLogo} />
        </div>
      </Link>
      <div className={style.searchContainer}>
        <Link to='/'>
          <div className={style.homeButtonContainer}>
            <Home className={style.logoHomeContainer} />
          </div>
        </Link>
        <input
          type='text'
          className={style.inputSearch}
          placeholder='Search movie by...'
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
      </div>
    </header>
  )
}
