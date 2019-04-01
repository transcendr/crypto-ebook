import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql } from "gatsby"
import * as React from "react"
import Helmet from "react-helmet"
import ChapterNavSidebar from "../components/ChapterNavSidebar"
import * as styles from "../styles/Chapter.module.scss"

interface ChapterTemplateProps {
  data: {
    site: {
      siteMetadata: {
        name: string
        tagline: string
      }
    }
    contentfulChapter: {
      chapterName: string
      chapterCopy: {
        json: any
      }
      chapterSections: any[]
    }
  }
  pageContext: {
    slug: string
    chapterName: string
    chapterNumber: string
  }
}

class ChapterTemplate extends React.Component<ChapterTemplateProps, {}> {
  public render() {
    const { data, pageContext } = this.props
    const { contentfulChapter: chapter } = data
    const { name: siteTitle } = data.site.siteMetadata

    return (
      <div className={styles.page_chapter}>
        <Helmet title={`${chapter.chapterName} | ${siteTitle}`} />

        <ChapterNavSidebar context={pageContext} chapter={chapter} />

        <div style={{ display: "block" }}>
          <h1>{chapter.chapterName}</h1>
          {documentToReactComponents(chapter.chapterCopy.json)}
          {chapter.chapterSections.map((section: any) => {
            return (
              <div key={section.id}>
                <h2>{section.sectionTitle}</h2>
                {documentToReactComponents(section.sectionCopy.json)}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default ChapterTemplate

export const pageQuery = graphql`
  query ChapterBySlug($slug: String!) {
    site {
      siteMetadata {
        name
        tagline
      }
    }
    contentfulChapter(chapterSlug: { eq: $slug }) {
      chapterName
      chapterCopy {
        json
      }
      chapterSections {
        sectionTitle
        sectionCopy {
          json
        }
      }
    }
  }
`
