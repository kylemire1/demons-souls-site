const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const bossPageTemplate = path.resolve(`src/templates/boss-page.js`)

  const result = await graphql(`
    query PostSlugs {
      allMdx {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.allMdx.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: bossPageTemplate,
      context: {
        test: "hi",
      },
    })
  })
}
