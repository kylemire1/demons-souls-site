const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `bosses` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const bossPageTemplate = path.resolve(`src/templates/boss-page.js`)

  const result = await graphql(`
    query PostSlugs {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: `/bosses${node.fields.slug}`,
      component: bossPageTemplate,
      context: {
        slug: `${node.fields.slug}`,
        title: node.frontmatter.title,
      },
    })
  })
}
