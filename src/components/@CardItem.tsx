import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import * as React from "react"
import SVG from "react-inlinesvg"
import { CardSectionType, ContentfulChapter, PageContextType } from "../@types"
// import * as sx from "../styles/Cards.module.scss"
import * as sx from "../styles/Cards.module.scss"

interface CardItemProps {
  context: PageContextType
  chapter: ContentfulChapter
  section: CardSectionType
}

class CardItem extends React.Component<CardItemProps, {}> {
  public render() {
    const { context, section } = this.props
    const { cardHeadline: headline, cardCopy, cardImage } = section

    console.log("CARD ITEM", section)

    return (
      <div className={sx.cards_component__card}>
        <h3 className={sx.cards_component__card_headline}>{headline}</h3>
        <img
          className={sx.cards_component__card_image}
          src={cardImage.file.url}
        />
        <div className={sx.cards_component__card_copy}>
          {documentToReactComponents(cardCopy.json)}
        </div>
      </div>
    )
  }
}

export default CardItem
