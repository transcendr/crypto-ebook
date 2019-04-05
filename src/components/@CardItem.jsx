import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import * as React from "react"
import * as sx from "../styles/Cards.module.scss"

class CardItem extends React.Component {
  render() {
    const { section } = this.props
    const { cardHeadline: headline, cardCopy, cardImage } = section

    return (
      <div className={sx.cards_component__card}>
        <h3 className={sx.cards_component__card_headline}>{headline}</h3>
        <img
          className={sx.cards_component__card_image}
          src={cardImage.file.url}
          alt={cardImage.description}
        />
        <div className={sx.cards_component__card_copy}>
          {documentToReactComponents(cardCopy.json)}
        </div>
      </div>
    )
  }
}

export default CardItem
