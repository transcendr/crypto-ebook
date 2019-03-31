import { Link } from "gatsby"
import * as React from "react"
import * as styles from "../styles/ExitButton.module.scss"

class ExitButton extends React.Component<{}, {}> {
  public render() {
    return (
      <Link to="/" className={styles.ExitButton}>
        Exit eBook
      </Link>
    )
  }
}

export default ExitButton
