import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql } from "gatsby"
import * as React from "react"
import Helmet from "react-helmet"
import ChapterNavSidebar from "../components/ChapterNavSidebar"

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
      chapterCopy: any
      chapterSections: any[]
    }
  }
  pageContext: {
    slug: string
    order: number
  }
}

class ChapterTemplate extends React.Component<ChapterTemplateProps, {}> {
  public render() {
    const { data, pageContext } = this.props
    const { contentfulChapter: post } = data
    const { name: siteTitle } = data.site.siteMetadata

    return (
      <div className="page-chapter">
        <Helmet title={`${post.chapterName} | ${siteTitle}`} />

        <ChapterNavSidebar context={pageContext} />

        <h1>{post.chapterName}</h1>
        {documentToReactComponents(post.chapterCopy.json)}
        {post.chapterSections.map((section: any) => {
          return (
            <div key={section.id}>
              <h2>{section.sectionTitle}</h2>
              {documentToReactComponents(section.sectionCopy.json)}
            </div>
          )
        })}
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
