import * as React from "react"
import * as styles from "../styles/ChapterNavSidebar.module.scss"
import ChapterNavArrows from "./ChapterNavArrows"
import ExitButton from "./ExitButton"

interface ChapterNavSidebarState {
  isSingleChapterVisible: string
}

class ChapterNavSidebar extends React.Component<{}, ChapterNavSidebarState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      isSingleChapterVisible: "isSingleChapterVisible"
    }
  }

  public render() {
    const { isSingleChapterVisible } = this.state
    return (
      <div className="sidebar_nav">
        <div className={"sidebar_nav__content " + isSingleChapterVisible}>
          <ExitButton />
          <div className={styles.sidebar_nav__arrows}>
            <ChapterNavArrows visible={true} />
          </div>
          <p>Nav Sidebar</p>
        </div>
      </div>
    )
  }
}

export default ChapterNavSidebar
