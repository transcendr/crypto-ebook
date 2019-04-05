const Promise = require("bluebird")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const chapterTemplate = path.resolve("./src/templates/chapter.jsx")
    resolve(
      graphql(
        `
          {
            allContentfulChapter {
              edges {
                node {
                  chapterName
                  chapterSlug
                  chapterCopy {
                    json
                  }
                  chapterSections {
                    __typename
                  }
                  course {
                    courseName
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const chapters = result.data.allContentfulChapter.edges

        chapters.forEach((chapter, index) => {
          const { chapterSlug, course } = chapter.node

          // Generate Styled Chapter Numbers
          const order = index + 1
          let chapterNumber = order < 10 ? `0${order}` : `${order}`
          let prevChapterNumber = order - 1
          prevChapterNumber =
            prevChapterNumber < 10
              ? `0${prevChapterNumber}`
              : `${prevChapterNumber}`

          let nextChapterNumber = order + 1
          nextChapterNumber =
            nextChapterNumber < 10
              ? `0${nextChapterNumber}`
              : `${nextChapterNumber}`

          // Setup prev and next chapter context objects
          let prevChapter = index > 0 ? chapters[index - 1].node : null
          if (prevChapter) prevChapter.chapterNumber = prevChapterNumber
          let nextChapter = !!chapters[index + 1]
            ? chapters[index + 1].node
            : null
          if (nextChapter) nextChapter.chapterNumber = nextChapterNumber

          // Generate static pages
          createPage({
            path: `/chapter/${chapterSlug}/`,
            component: chapterTemplate,
            context: {
              slug: chapterSlug,
              chapterNumber,
              course,
              prevChapter,
              nextChapter
            }
          })
        })
      })
    )
  })
}
