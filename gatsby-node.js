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
        })
        chapters.forEach((chapter, index) => {
          let order = index + 1
          order = order < 10 ? `0${order}` : `${order}`
          createPage({
            path: `/chapter/${chapter.node.chapterSlug}/`,
            component: chapterTemplate,
            context: {
              slug: chapter.node.chapterSlug,
              chapterName: chapter.node.chapterName,
              chapterNumber: order
            }
          })
        })
      })
    )
  })
}
