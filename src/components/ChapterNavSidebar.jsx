import * as React from "react"
import * as chapterSX from "../styles/Chapter.module.scss"
import * as sx from "../styles/ChapterNavSidebar.module.scss"
import ChapterItem from "./ChapterItem"
import ChapterNavArrows from "./ChapterNavArrows"
import ChapterSections from "./ChapterSections"
import CompanyLogo from "./CompanyLogo"
import ExitButton from "./ExitButton"

class ChapterNavSidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSingleChapterVisible: "isSingleChapterVisible"
    }
  }

  render() {
    const { isSingleChapterVisible } = this.state
    const { context, chapter } = this.props
    const { prevChapter, nextChapter } = context
    return (
      <div
        className={`${sx.sidebar_nav} ${chapterSX.page_chapter__sidebar_nav}`}
      >
        <div className={sx.sidebar_nav__content + ` ${isSingleChapterVisible}`}>
          <ExitButton />

          <ChapterItem
            _number={context.chapterNumber}
            name={chapter.chapterName}
          />
          <div className={sx.sidebar_nav__arrows}>
            <ChapterNavArrows
              visible={true}
              prevChapter={prevChapter}
              nextChapter={nextChapter}
            />
          </div>
          <ChapterSections sections={chapter.chapterSections} />
          <CompanyLogo />
        </div>
      </div>
    )
  }
}

export default ChapterNavSidebar
