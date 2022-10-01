import { Card } from './Card'
import style from '../stylesheets/ListCards.module.css'
import marvel from '../images/bg-marvel.jpg'
import dc from '../images/bg-dc.jpg'
import pixar from '../images/bg-pixar.jpg'
import disney from '../images/bg-disney.jpg'

export const ListCards = ({ handleSuggestion }) => {
  const RECOMENDATIONS = ['Marvel', 'Pixar', 'DC', 'Disney']
  const BG_RECOM = [marvel, pixar, dc, disney]

  const handleOnClick = (suggestion) => {
    handleSuggestion(suggestion)
  }

  return (
    <article className={style.cardsContainer}>
      {RECOMENDATIONS.map((recom, index) => (
        <Card
          handleOnClick={handleOnClick}
          srcImg={BG_RECOM[index]}
          suggestionName={recom}
          key={recom}
        />
      ))}
    </article>
  )
}
