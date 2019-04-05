import { Link } from "gatsby"
import * as React from "react"
import * as sidebarSX from "../styles/ChapterNavSidebar.module.scss"
import * as sx from "../styles/CompanyLogo.module.scss"

class CompanyLogo extends React.Component {
  render() {
    return (
      <div
        className={`${sx.company_logo_container} ${
          sidebarSX.sidebar_nav__company_logo
        }`}
      >
        <Link to="/">
          <img
            style={{ width: "70%" }}
            src="/assets/company-logo.svg"
            alt="Knowlege Berries"
          />
        </Link>
      </div>
    )
  }
}

export default CompanyLogo
