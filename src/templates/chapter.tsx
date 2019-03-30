import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql } from "gatsby"
import * as React from "react"
import Helmet from "react-helmet"

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
}

class ChapterTemplate extends React.Component<ChapterTemplateProps, {}> {
  public render() {
    const { data } = this.props
    const { contentfulChapter: post } = data
    const { name: siteTitle } = data.site.siteMetadata

    return (
      <div>
        <Helmet title={`${post.chapterName} | ${siteTitle}`} />
        <h1 className="section-headline">{post.chapterName}</h1>
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
