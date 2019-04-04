import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql } from "gatsby"
import * as React from "react"
import Helmet from "react-helmet"
import { ContentfulChapter, PageContextType } from "../@types"
import Cards from "../components/@CardsComponent"
import ChapterSectionCopy from "../components/@ChapterSectionCopy"
import TopicsList from "../components/@TopicsList"
import ChapterBottomNav from "../components/ChapterBottomNav"
import ChapterNavMobile from "../components/ChapterNavMobile"
import ChapterNavSidebar from "../components/ChapterNavSidebar"
import * as styles from "../styles/Chapter.module.scss"
import { isComponentType } from "../utils/contently"

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
  pageContext: PageContextType
}

class ChapterTemplate extends React.Component<ChapterTemplateProps, {}> {
  public render() {
    const { data, pageContext } = this.props
    const { prevChapter, nextChapter } = pageContext
    const { contentfulChapter: chapter } = data
    const { name: siteTitle } = data.site.siteMetadata

    console.log("chapter.sections", chapter.chapterSections)

    return (
      <div className={styles.page_chapter}>
        <Helmet title={`${chapter.chapterName} | ${siteTitle}`} />

        <ChapterNavMobile context={pageContext} chapter={chapter} />

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
                <h1 style={{ display: "none" }}>{chapter.chapterName}</h1>
                {documentToReactComponents(chapter.chapterCopy.json)}
                {chapter.chapterSections &&
                  chapter.chapterSections.map((section: any) => {
                    switch (isComponentType(section)) {
                      case "section":
                        return (
                          <ChapterSectionCopy
                            key={section.id}
                            section={section}
                          />
                        )
                      case "topics":
                        return (
                          <TopicsList
                            key={section.id}
                            context={pageContext}
                            chapter={chapter}
                            section={section}
                          />
                        )
                      case "cards":
                        return (
                          <Cards
                            key={section.id}
                            context={pageContext}
                            chapter={chapter}
                            section={section}
                          />
                        )
                      default:
                        return (
                          <p key={section.id}>
                            There is no component associated
                          </p>
                        )
                    }
                  })}
              </div>
            </div>
          </div>

          <div className="chapter__bottom_nav">
            <ChapterBottomNav
              prevChapter={prevChapter}
              nextChapter={nextChapter}
            />
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
        ... on ContentfulChapterSection {
          id
          sectionTitle
          sectionSlug
          sectionCopy {
            json
          }
        }
        ... on ContentfulTopicsListComponent {
          id
          sectionSlug
          topicsComponentHeadline
          topicsComponentList {
            json
          }
        }
        ... on ContentfulCardsComponent {
          id
          sectionSlug
          cardItems {
            id
            cardHeadline
            cardImage {
              description
              id
              file {
                url
                fileName
                contentType
              }
            }
            cardCopy {
              json
            }
          }
        }
      }
    }
  }
`
