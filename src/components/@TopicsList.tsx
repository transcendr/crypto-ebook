import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import * as React from "react"
import { TopicsListSectionType } from "../@types"
import * as sx from "../styles/TopicsList.module.scss"

interface TopicsListProps {
  section: TopicsListSectionType
}

class TopicsList extends React.Component<TopicsListProps, {}> {
  public render() {
    const { section } = this.props
    return (
      <div className={sx.topics_component}>
        <div
          className={`${sx.topics_component__column} ${
            sx.topics_component__column_left
          }`}
        >
          <h1>TITLE</h1>
        </div>
        <div
          className={`${sx.topics_component__column} ${
            sx.topics_component__column_right
          }`}
        >
          <h1>TITLE</h1>
        </div>
      </div>
    )
  }
}

export default TopicsList
