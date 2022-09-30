import { FaSpinner as Loading } from 'react-icons/fa'
import style from '../stylesheets/Spinner.module.css'

export const Spinner = () => {
  return <Loading className={style.loadingContent} />
}
