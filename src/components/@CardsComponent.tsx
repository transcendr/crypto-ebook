import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import * as React from "react"
import { CardsSectionType, ContentfulChapter, PageContextType } from "../@types"
// import * as sx from "../styles/Cards.module.scss"
import * as sx from "../styles/Cards.module.scss"
import CardItem from "./@CardItem"

interface CardsProps {
  context: PageContextType
  chapter: ContentfulChapter
  section: CardsSectionType
}

class Cards extends React.Component<CardsProps, {}> {
  public render() {
    const { context, section, chapter } = this.props
    return (
      <div className={sx.cards_component}>
        {section.cardItems &&
          section.cardItems.map(item => {
            return (
              <CardItem
                key={item.id}
                context={context}
                chapter={chapter}
                section={item}
              />
            )
          })}
      </div>
    )
  }
}

export default Cards
