const Promise = require("bluebird")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const chapterTemplate = path.resolve("./src/templates/chapter.tsx")
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
                    sectionTitle
                    sectionCopy {
                      json
                    }
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
        console.log("\n Found Chapters: " + chapters.length)
        chapters.forEach((chapter, index) => {
          console.log("Name: " + chapter.node.chapterName + "\n")
          console.log("Slug: " + chapter.node.chapterSlug + "\n")
          console.log("Course: " + chapter.node.course.courseName + "\n")
        })
        chapters.forEach((chapter, index) => {
          const { chapterSlug, course } = chapter.node
          let chapterNumber = index + 1
          chapterNumber =
            chapterNumber < 10 ? `0${chapterNumber}` : `${chapterNumber}`
          let prevChapter = index > 0 ? chapters[index - 1].node : null
          let nextChapter = !!chapters[index + 1]
            ? chapters[index + 1].node
            : null
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
