import { Slider } from '../components/Slider'
import { ListMovies } from '../components/ListMovies'
import styles from '../stylesheets/HomePage.module.css'

export const HomePage = () => {
  return (
    <article className={styles.mainContainerMovies}>
      <Slider autoPlay={true} />
      <ListMovies />
    </article>
  )
}
