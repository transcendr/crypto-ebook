import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import * as React from "react"

class ChapterSectionCopy extends React.Component {
  render() {
    const { section } = this.props
    return (
      <div id={section.sectionSlug} key={section.id}>
        <h2>{section.sectionTitle}</h2>
        {documentToReactComponents(section.sectionCopy.json)}
      </div>
    )
  }
}

export default ChapterSectionCopy
