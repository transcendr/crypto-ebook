import * as React from "react"
import {
  animateScroll as scroll,
  Element,
  Events,
  Link,
  scroller,
  scrollSpy
} from "react-scroll"
import { SectionType } from "../@types"
import * as sidebarStyles from "../styles/ChapterNavSidebar.module.scss"
import * as styles from "../styles/ChapterSections.module.scss"

interface ChapterSectionsProps {
  sections: SectionType[]
}

class ChapterSections extends React.Component<ChapterSectionsProps, {}> {
  public componentDidMount() {
    Events.scrollEvent.register("begin", (to: any, element: any) => {
      console.log("begin", { to, element })
    })

    Events.scrollEvent.register("end", (to: any, element: any) => {
      console.log("end", { to, element })
    })

    scrollSpy.update()
  }

  public componentWillUnmount() {
    Events.scrollEvent.remove("begin")
    Events.scrollEvent.remove("end")
  }

  public scrollToTop() {
    scroll.scrollToTop()
  }

  public scrollToBottom() {
    scroll.scrollToBottom()
  }

  public render() {
    const { sections } = this.props
    return (
      <ul
        className={`${styles.chapter_sections} ${
          sidebarStyles.chapter_sections
        }`}
      >
        {sections &&
          sections.map((section: SectionType) => {
            return (
              <li
                key={section.id}
                className={`${styles.chapter_section} ${
                  sidebarStyles.chapter_section
                }`}
              >
                <Link
                  to={section.sectionSlug}
                  activeClass={styles.chapter_section__isActive}
                  spy={true}
                  smooth={true}
                  duration={250}
                  offset={-50}
                  hashSpy={true}
                >
                  {section.sectionTitle}
                </Link>
              </li>
            )
          })}
      </ul>
    )
  }
}

export default ChapterSections
