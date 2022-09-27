import { useParams } from "react-router-dom"
import styles from '../stylesheets/MovieDetailsPage.module.css'
export const MovieDetailsPage = () => {
  const {movieId} = useParams()
  
  return  <article>
    Esta es la movie page desgraciados
  </article>
}