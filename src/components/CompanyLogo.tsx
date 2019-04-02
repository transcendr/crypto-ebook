import { Link } from "gatsby"
import * as React from "react"
import SVG from "react-inlinesvg"
import * as sidebarStyles from "../styles/ChapterNavSidebar.module.scss"
import * as styles from "../styles/CompanyLogo.module.scss"

class CompanyLogo extends React.Component<{}, {}> {
  public render() {
    return (
      <div
        className={`${styles.company_logo_container} ${
          sidebarStyles.sidebar_nav__company_logo
        }`}
      >
        <Link to="/">
          <SVG src="/assets/company-logo.svg">&nbsp;</SVG>
        </Link>
      </div>
    )
  }
}

export default CompanyLogo
