import style from '../stylesheets/Card.module.css'

export const Card = ({ handleOnClick, suggestionName, srcImg }) => {

  const handleClick = () => {
    handleOnClick(suggestionName)
  }

  return (
    <article className={style.cardContainer}  onClick={handleClick} >
      <section className={style.cardContent}>
        <img src={srcImg} alt={''} className={style.imgContent}/>
        <span className={style.categoryContent}>{suggestionName}</span>
      </section>
    </article>
  )
}
