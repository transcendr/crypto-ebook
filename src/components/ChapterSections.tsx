import * as React from "react"
import * as sidebarStyles from "../styles/ChapterNavSidebar.module.scss"
import * as styles from "../styles/ChapterSections.module.scss"

interface SectionType {
  id: string
  sectionTitle: string
}

interface ChapterSectionsProps {
  sections: SectionType[]
}

class ChapterSections extends React.Component<ChapterSectionsProps, {}> {
  public render() {
    const { sections } = this.props
    return (
      <ul
        className={`${styles.chapter_sections} ${
          sidebarStyles.chapter_sections
        }`}
      >
        {sections.map((section: SectionType) => {
          return (
            <li
              key={section.id}
              className={`${styles.chapter_section} ${
                sidebarStyles.chapter_section
              }`}
            >
              <button className={styles.chapter_section__btn}>
                {section.sectionTitle}
              </button>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default ChapterSections
