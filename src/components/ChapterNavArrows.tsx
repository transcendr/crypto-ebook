import { Link } from "gatsby"
import * as React from "react"
import SVG from "react-inlinesvg"
import * as styles from "../styles/ChapterNavArrows.module.scss"

interface ChapterNavArrowsProps {
  visible: boolean
}

class ChapterNavArrows extends React.Component<ChapterNavArrowsProps, {}> {
  public render() {
    return (
      <div className={styles.arrows}>
        <div className={styles.arrow}>
          <Link to="/" className={true ? "" : styles.isDisabled}>
            <SVG src="/assets/arrow-left.svg">&larro;</SVG>
          </Link>
        </div>

        <div className={styles.arrow}>
          <Link to="/" className={true ? "" : styles.isDisabled}>
            <SVG src="/assets/arrow-right.svg">&rarro;</SVG>
          </Link>
        </div>
      </div>
    )
  }
}

export default ChapterNavArrows
