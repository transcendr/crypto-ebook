import { Link } from "gatsby"
import * as React from "react"
import SVG from "react-inlinesvg"
import * as sx from "../styles/ChapterBottomNav.module.scss"

class ChapterBottomNav extends React.Component {
  render() {
    const { prevChapter, nextChapter } = this.props

    return (
      <div className={`${sx.chapter_navigation}`}>
        <div
          className={`${sx.chapter_navigation__block} ${
            sx.chapter_navigation__block_left
          }`}
        >
          {prevChapter && (
            <Link
              to={`/chapter/${prevChapter.chapterSlug}`}
              className={`${sx.chapter_navigation__link}`}
            >
              <div className={`${sx.chapter_navigation__wrapper}`}>
                <div className={`${sx.chapter_navigation__direction}`}>
                  Previous
                </div>
                <div className={`${sx.chapter_navigation__title}`}>
                  {prevChapter.chapterName}
                </div>
                <div className={`${sx.chapter_navigation__chapter_number}`}>
                  {prevChapter.chapterNumber}
                </div>
              </div>
              <div
                className={`${sx.chapter_navigation__arrow} ${
                  sx.chapter_navigation__arrow_left
                }`}
              >
                <SVG src="/assets/arrow-right.svg">{"<<"}</SVG>
              </div>
            </Link>
          )}
        </div>

        <div
          className={`${sx.chapter_navigation__block} ${
            sx.chapter_navigation__block_right
          }`}
        >
          {nextChapter && (
            <Link
              to={`/chapter/${nextChapter.chapterSlug}`}
              className={`${sx.chapter_navigation__link}`}
            >
              <div className={`${sx.chapter_navigation__wrapper}`}>
                <div className={`${sx.chapter_navigation__direction}`}>
                  Next
                </div>
                <div className={`${sx.chapter_navigation__title}`}>
                  {nextChapter.chapterName}
                </div>
                <div className={`${sx.chapter_navigation__chapter_number}`}>
                  {nextChapter.chapterNumber}
                </div>
              </div>
              <div className={`${sx.chapter_navigation__arrow}`}>
                <SVG src="/assets/arrow-right.svg">{">>"}</SVG>
              </div>
            </Link>
          )}
        </div>
      </div>
    )
  }
}

export default ChapterBottomNav
