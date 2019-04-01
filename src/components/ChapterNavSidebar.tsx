import * as React from "react"
import * as styles from "../styles/ChapterNavSidebar.module.scss"
import ChapterItem from "./ChapterItem"
import ChapterNavArrows from "./ChapterNavArrows"
import ExitButton from "./ExitButton"

interface ChapterNavSidebarProps {
  context: {
    slug: string
    chapterName: string
    chapterNumber: string
  }
}
interface ChapterNavSidebarState {
  isSingleChapterVisible: string
}

class ChapterNavSidebar extends React.Component<
  ChapterNavSidebarProps,
  ChapterNavSidebarState
> {
  constructor(props: ChapterNavSidebarProps) {
    super(props)
    this.state = {
      isSingleChapterVisible: "isSingleChapterVisible"
    }
  }

  public render() {
    const { isSingleChapterVisible } = this.state
    const { context } = this.props
    return (
      <div className="sidebar_nav">
        <div className={"sidebar_nav__content " + isSingleChapterVisible}>
          <ExitButton />
          <div className={styles.sidebar_nav__arrows}>
            <ChapterNavArrows visible={true} />
            <ChapterItem
              chapterNumber={context.chapterNumber}
              chapterName={context.chapterName}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ChapterNavSidebar
