import { Link } from "gatsby"
import * as React from "react"
import * as sx from "../styles/ExitButton.module.scss"

class ExitButton extends React.Component {
  render() {
    return (
      <Link to="/" className={sx.ExitButton}>
        Exit eBook
      </Link>
    )
  }
}

export default ExitButton
