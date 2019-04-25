import * as React from "react"
import * as sx from "../styles/Cards.module.scss"
import CardItem from "./@CardItem"

class Cards extends React.Component {
  render() {
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
