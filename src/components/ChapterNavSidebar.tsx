import * as React from "react"
import * as chapterStyles from "../styles/Chapter.module.scss"
import * as styles from "../styles/ChapterNavSidebar.module.scss"
import ChapterItem from "./ChapterItem"
import ChapterNavArrows from "./ChapterNavArrows"
import ChapterSections from "./ChapterSections"
import CompanyLogo from "./CompanyLogo"
import ExitButton from "./ExitButton"

interface SectionType {
  id: string
  sectionTitle: string
  sectionSlug: string
}
interface ChapterNavSidebarProps {
  context: {
    slug: string
    chapterNumber: string
  }
  chapter: {
    chapterName: string
    chapterCopy: {
      json: any
    }
    chapterSections: SectionType[]
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
    const { context, chapter } = this.props
    return (
      <div
        className={`${styles.sidebar_nav} ${
          chapterStyles.page_chapter__sidebar_nav
        }`}
      >
        <div
          className={styles.sidebar_nav__content + ` ${isSingleChapterVisible}`}
        >
          <ExitButton />
          <div className={styles.sidebar_nav__arrows}>
            <ChapterNavArrows visible={true} />
          </div>
          <ChapterItem
            _number={context.chapterNumber}
            name={chapter.chapterName}
          />
          <ChapterSections sections={chapter.chapterSections} />
          <CompanyLogo />
        </div>
      </div>
    )
  }
}

export default ChapterNavSidebar
