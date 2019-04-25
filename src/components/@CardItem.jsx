import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import * as React from "react"
import * as sx from "../styles/Cards.module.scss"

class CardItem extends React.Component {
  render() {
    const { section } = this.props
    const {
      cardHeadline: headline,
      cardCopy,
      cardImage,
      backgroundColor,
      borderColor,
      titleColor,
      bodyColor
    } = section

    let cardStyles = {}
    backgroundColor && (cardStyles.backgroundColor = backgroundColor.code)
    borderColor && (cardStyles.borderColor = borderColor.code)

    const titleStyles = titleColor ? { color: titleColor.code } : null
    const bodyStyles = bodyColor ? { color: bodyColor.code } : null

    return (
      <div className={sx.cards_component__card} style={cardStyles}>
        <div className={sx.topics_component__dt_headline}>
          <h3 className={sx.cards_component__card_headline} style={titleStyles}>
            {headline}
          </h3>
        </div>
        <div className={sx.cards_component__card_mobi} style={cardStyles}>
          <img
            className={sx.cards_component__card_image}
            src={cardImage.file.url}
            alt={cardImage.description}
          />
          <div className={sx.cards_component__card_copy} style={bodyStyles}>
            {cardCopy.json && documentToReactComponents(cardCopy.json)}
          </div>
        </div>
      </div>
    )
  }
}

export default CardItem
