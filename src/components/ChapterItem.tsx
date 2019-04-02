import * as React from "react"
import * as styles from "../styles/ChapterItem.module.scss"
import * as sidebarStyles from "../styles/ChapterNavSidebar.module.scss"

interface ChapterItemProps {
  _number: string
  name: string
}

class ChapterItem extends React.Component<ChapterItemProps, {}> {
  public render() {
    const { _number, name } = this.props
    return (
      <div className={`${styles.chapter_item} ${sidebarStyles.chapter_item}`}>
        <div className={styles.chapter_item__header}>
          <span className={styles.chapter_item__num}>{_number}</span>
        </div>
        <h3 className={styles.chapter_item__title}>{name}</h3>
      </div>
    )
  }
}

export default ChapterItem