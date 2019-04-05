import * as React from "react"
import { Link, scrollSpy } from "react-scroll"
import * as sidebarSX from "../styles/ChapterNavSidebar.module.scss"
import * as sx from "../styles/ChapterSections.module.scss"

class ChapterSections extends React.Component {
  componentDidMount() {
    scrollSpy.update()
  }

  render() {
    const { sections } = this.props
    return (
      <ul className={`${sx.chapter_sections} ${sidebarSX.chapter_sections}`}>
        {sections &&
          sections.map(section => {
            if (!section.sectionTitle) {
              return null
            }
            return (
              <li
                key={section.id}
                className={`${sx.chapter_section} ${sidebarSX.chapter_section}`}
              >
                <Link
                  to={section.sectionSlug}
                  activeClass={sx.chapter_section__isActive}
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
