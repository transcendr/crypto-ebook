import * as React from "react"
import { animateScroll as scroll } from "react-scroll"
import * as sx from "../styles/ChapterItem.module.scss"
import * as sidebarSX from "../styles/ChapterNavSidebar.module.scss"

class ChapterItem extends React.Component {
  scrollToTop() {
    scroll.scrollToTop({ duration: 250 })
  }

  render() {
    const { _number, name } = this.props
    return (
      <div className={`${sx.chapter_item} ${sidebarSX.chapter_item}`}>
        <div className={sx.chapter_item__header}>
          <span className={sx.chapter_item__num}>{_number}</span>
        </div>
        <h3 onClick={this.scrollToTop} className={sx.chapter_item__title}>
          {name}
        </h3>
      </div>
    )
  }
}

export default ChapterItem
