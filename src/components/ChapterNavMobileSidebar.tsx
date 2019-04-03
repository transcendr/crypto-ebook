import * as React from "react"
import { ContentfulChapter } from "../@types"
import * as styles from "../styles/ChapterNavMobileSidebar.module.scss"
import ChapterItem from "./ChapterItem"
import ChapterSections from "./ChapterSections"
import CompanyLogo from "./CompanyLogo"
import ExitButton from "./ExitButton"

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
  isOpen: boolean
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
      isOpen: props.isOpen
    }
  }

  public close() {
    console.log("Close menu")
    this.setState({ isOpen: false })
  }

  public componentWillReceiveProps(props: any) {
    this.setState({ isOpen: props.isOpen })
  }

  public render() {
    // const { isOpen } = this.state
    const { isOpen } = this.state
    const { context, chapter } = this.props
    return (
      <div
        className={`${styles.sidebar_container} ${isOpen ? styles.isOpen : ""}`}
      >
        <div className={styles.backdrop} onClick={this.close.bind(this)} />
        <div className={styles.sidebar}>
          <button
            className={styles.close_nav}
            aria-label="Close navigation"
            onClick={this.close.bind(this)}
          />
          <div className={styles.sidebar_content}>
            <ChapterItem
              _number={context.chapterNumber}
              name={chapter.chapterName}
            />
            <ChapterSections sections={chapter.chapterSections} />
          </div>
          <ExitButton />
          <CompanyLogo />
        </div>
      </div>
    )
  }
}

export default ChapterNavMobile
