import { Link } from "gatsby"
import * as React from "react"
import SVG from "react-inlinesvg"
import { ContentfulChapter } from "../@types"
import * as styles from "../styles/ChapterNavArrows.module.scss"

interface ChapterNavArrowsProps {
  visible: boolean
  prevChapter: ContentfulChapter | null
  nextChapter: ContentfulChapter | null
}

class ChapterNavArrows extends React.Component<ChapterNavArrowsProps, {}> {
  public render() {
    const { prevChapter, nextChapter } = this.props

    return (
      <div className={styles.arrows}>
        <div className={styles.arrow}>
          <Link
            to={prevChapter ? "/chapter/" + prevChapter.chapterSlug : "/"}
            className={prevChapter ? "" : styles.isDisabled}
          >
            <SVG src="/assets/arrow-left.svg">&larro;</SVG>
          </Link>
        </div>

        <div className={styles.arrow}>
          <Link
            to={nextChapter ? "/chapter/" + nextChapter.chapterSlug : "/"}
            className={nextChapter ? "" : styles.isDisabled}
          >
            <SVG src="/assets/arrow-right.svg">&rarro;</SVG>
          </Link>
        </div>
      </div>
    )
  }
}

export default ChapterNavArrows
