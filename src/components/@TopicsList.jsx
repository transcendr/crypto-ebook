import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import * as React from "react"
import * as sx from "../styles/TopicsList.module.scss"

class TopicsList extends React.Component {
  render() {
    const { context, section, chapter } = this.props
    const { chapterName } = chapter
    const { chapterNumber } = context
    const { topicsComponentHeadline: headline } = section

    return (
      <div className={sx.topics_component}>
        <div
          className={`${sx.topics_component__column} ${
            sx.topics_component__column_left
          }`}
        >
          <h2 className={sx.topics_component__chapter_number}>
            {chapterNumber}
          </h2>
          <h3 className={sx.topics_component__chapter_name}>{chapterName}</h3>
        </div>
        <div
          className={`${sx.topics_component__column} ${
            sx.topics_component__column_right
          }`}
        >
          <h2 className={sx.topics_component__headline}>{headline}</h2>
          <div className={`${sx.topics_component__list_copy}`}>
            {documentToReactComponents(section.topicsComponentList.json)}
          </div>
        </div>
      </div>
    )
  }
}

export default TopicsList
