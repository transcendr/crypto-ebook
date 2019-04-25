import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import * as React from "react"
import * as sx from "../styles/TopicsList.module.scss"

class TopicsList extends React.Component {
  render() {
    const { context, section, chapter } = this.props
    const { chapterName } = chapter
    const { chapterNumber } = context
    const {
      topicsComponentHeadline: headline,
      backgroundColor,
      borderColor
    } = section

    const outerStyles = borderColor ? { borderColor: borderColor.code } : null
    const leftColStyles = backgroundColor
      ? { backgroundColor: backgroundColor.code }
      : null

    return (
      <div className={sx.topics_component} style={outerStyles}>
        <div
          className={`${sx.topics_component__column} ${
            sx.topics_component__column_left
          }`}
          style={leftColStyles}
        >
          <div className={sx.topics_component__dt_chapter_info}>
            <h2 className={sx.topics_component__chapter_number}>
              {chapterNumber}
            </h2>
            <h3 className={sx.topics_component__chapter_name}>{chapterName}</h3>
          </div>
          <div className={sx.topics_component__mobi_chapter_info}>
            <h3 className={sx.topics_component__chapter_name}>
              {chapterNumber}{" "}
              <span style={{ fontWeight: "500" }}>{chapterName}</span>
            </h3>
          </div>
        </div>
        <div
          className={`${sx.topics_component__column} ${
            sx.topics_component__column_right
          }`}
        >
          <h2 className={sx.topics_component__headline}>{headline}</h2>
          <div className={`${sx.topics_component__list_copy}`}>
            {section.topicsComponentList &&
              documentToReactComponents(section.topicsComponentList.json)}
          </div>
        </div>
      </div>
    )
  }
}

export default TopicsList
