const Promise = require("bluebird")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    // const blogPost = path.resolve("./src/templates/blog-post.js")
    resolve(
      graphql(
        `
          {
            allContentfulChapter {
              edges {
                node {
                  chapterName
                  chapterSlug
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
          console.log("Name: " + chapter.node.chapterName)
        })
        // posts.forEach((post, index) => {
        //   createPage({
        //     path: `/chapter/${post.node.slug}/`,
        //     component: blogPost,
        //     context: {
        //       slug: post.node.slug
        //     },
        //   })
        // })
      })
    )
  })
}
