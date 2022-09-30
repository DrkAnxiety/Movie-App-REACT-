import style from '../stylesheets/Header.module.css'
import { BiCameraMovie as Logo } from 'react-icons/bi'
import { TbLetterM } from 'react-icons/tb'
import { TbLetterO } from 'react-icons/tb'
import { TbLetterV } from 'react-icons/tb'
import { TbLetterI } from 'react-icons/tb'
import { TbLetterE } from 'react-icons/tb'
import { Link } from 'react-router-dom'

export const Header = () => {

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
    </header>
  )
}
