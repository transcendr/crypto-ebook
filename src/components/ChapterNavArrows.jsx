import { Link } from "gatsby"
import * as React from "react"
import SVG from "react-inlinesvg"
import * as sx from "../styles/ChapterNavArrows.module.scss"

class ChapterNavArrows extends React.Component {
  render() {
    const { prevChapter, nextChapter, isHeader } = this.props

    return (
      <div className={isHeader ? sx.header__arrows : ""}>
        <div className={sx.arrows}>
          <div className={sx.arrow}>
            <Link
              to={prevChapter ? "/chapter/" + prevChapter.chapterSlug : "/"}
              className={prevChapter ? "" : sx.isDisabled}
            >
              <SVG src="/assets/arrow-left.svg">&larro;</SVG>
            </Link>
          </div>

          <div className={sx.arrow}>
            <Link
              to={nextChapter ? "/chapter/" + nextChapter.chapterSlug : "/"}
              className={nextChapter ? "" : sx.isDisabled}
            >
              <SVG src="/assets/arrow-right.svg">&rarro;</SVG>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ChapterNavArrows
