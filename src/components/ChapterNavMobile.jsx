import * as React from "react"
import * as chapterStyles from "../styles/Chapter.module.scss"
import * as sx from "../styles/ChapterNavMobile.module.scss"
import ChapterNavArrows from "./ChapterNavArrows"
import ChapterNavMobileSidebar from "./ChapterNavMobileSidebar"

class ChapterNavMobile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  close() {
    this.setState({ isOpen: false })
  }

  render() {
    const { isOpen } = this.state
    const { context, chapter } = this.props
    const { prevChapter, nextChapter } = context
    return (
      <div className={`${chapterStyles.page_chapter__mobile_nav}`}>
        <header className={sx.header}>
          <button
            className={sx.header__burger}
            onClick={() => {
              this.setState({ isOpen: !isOpen })
            }}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          />
          <div className={sx.header__title}>
            <span>{context.chapterNumber}</span>
            {chapter.chapterName}
          </div>
          <ChapterNavArrows
            isHeader={true}
            prevChapter={prevChapter}
            nextChapter={nextChapter}
          />
        </header>
        <ChapterNavMobileSidebar
          context={context}
          chapter={chapter}
          isOpen={isOpen}
        />
      </div>
    )
  }
}

export default ChapterNavMobile
