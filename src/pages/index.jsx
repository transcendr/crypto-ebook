import { graphql } from "gatsby"
import * as React from "react"
import * as styles from "../styles/shared.module.scss"

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`

export default class IndexPage extends React.Component {
  render() {
    const { name, tagline } = this.props.data.site.siteMetadata

    return (
      <div className={styles.Container}>
        <h1>{name}</h1>
        <p>{tagline}</p>
      </div>
    )
  }
}
