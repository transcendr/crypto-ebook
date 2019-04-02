import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql } from "gatsby"
import * as React from "react"
import Helmet from "react-helmet"
import { ContentfulChapter } from "../@types"
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
    contentfulChapter: ContentfulChapter
  }
  pageContext: {
    slug: string
    chapterNumber: string
    course: {
      courseName: string
    }
    prevChapter: ContentfulChapter
    nextChapter: ContentfulChapter
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

        <article className={styles.chapter_container}>
          <div className={styles.chapter}>
            <div className={styles.chapter__book_title}>
              {pageContext.course.courseName}
            </div>
            <div className={styles.chapter__number}>
              {pageContext.chapterNumber}
            </div>

            <div className={styles.chapter__content}>
              <div className={`${styles.content} ${styles.custom}`}>
                <h1>{chapter.chapterName}</h1>
                {documentToReactComponents(chapter.chapterCopy.json)}
                {chapter.chapterSections.map((section: any) => {
                  return (
                    <div id={section.sectionSlug} key={section.id}>
                      <h2>{section.sectionTitle}</h2>
                      {documentToReactComponents(section.sectionCopy.json)}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </article>
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
      chapterSlug
      chapterName
      chapterCopy {
        json
      }
      chapterSections {
        id
        sectionTitle
        sectionSlug
        sectionCopy {
          json
        }
      }
    }
  }
`
