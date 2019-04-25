import * as React from "react"
import * as sx from "../styles/ChapterNavMobileSidebar.module.scss"
import ChapterItem from "./ChapterItem"
import ChapterSections from "./ChapterSections"
import CompanyLogo from "./CompanyLogo"
import ExitButton from "./ExitButton"

class ChapterNavMobileSidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.isOpen
    }
  }

  close() {
    console.log("Close menu")
    this.setState({ isOpen: false })
  }

  componentWillReceiveProps(props) {
    this.setState({ isOpen: props.isOpen })
  }

  render() {
    const { isOpen } = this.state
    const { context, chapter } = this.props
    return (
      <div className={`${sx.sidebar_container} ${isOpen ? sx.isOpen : ""}`}>
        <div className={sx.backdrop} onClick={this.close.bind(this)} />
        <div className={sx.sidebar}>
          <button
            className={sx.close_nav}
            aria-label="Close navigation"
            onClick={this.close.bind(this)}
          />
          <div className={sx.sidebar_content}>
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

export default ChapterNavMobileSidebar
