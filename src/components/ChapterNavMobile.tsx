import * as React from "react"
import { ContentfulChapter } from "../@types"
import * as chapterStyles from "../styles/Chapter.module.scss"
import * as styles from "../styles/ChapterNavMobile.module.scss"
import ChapterNavArrows from "./ChapterNavArrows"
import ChapterNavMobileSidebar from "./ChapterNavMobileSidebar"

interface SectionType {
  id: string
  sectionTitle: string
  sectionSlug: string
}

interface ChapterNavMobileProps {
  context: {
    slug: string
    chapterNumber: string
    prevChapter: ContentfulChapter
    nextChapter: ContentfulChapter
  }
  chapter: {
    chapterSlug: string
    chapterName: string
    chapterCopy: {
      json: any
    }
    chapterSections: SectionType[]
  }
}
interface ChapterNavMobileState {
  isOpen: boolean
}

class ChapterNavMobile extends React.Component<
  ChapterNavMobileProps,
  ChapterNavMobileState
> {
  constructor(props: ChapterNavMobileProps) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  public close() {
    console.log("Close menu")
    this.setState({ isOpen: false })
  }

  public render() {
    const { isOpen } = this.state
    const { context, chapter } = this.props
    const { prevChapter, nextChapter } = context
    return (
      <div className={`${chapterStyles.page_chapter__mobile_nav}`}>
        <header className={styles.header}>
          <button
            className={styles.header__burger}
            onClick={() => {
              this.setState({ isOpen: !isOpen })
            }}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          />
          <div className={styles.header__title}>
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
